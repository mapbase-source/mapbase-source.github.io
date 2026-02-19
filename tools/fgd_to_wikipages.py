
#------------------------------------------------------------------------
# Converts FGD entities into Jekyll markdown pages containing only new content
# Requires https://github.com/pySourceSDK/ValveFGD
# (with parsing fixes from https://github.com/Blixibon/ValveFGD/tree/parser-irregular-descriptions-fix)
#------------------------------------------------------------------------

from valvefgd import FgdParse

class FilteredEnt:
    pass

# Replace with relevant FGDs
fgd = FgdParse('base.fgd')
fgd_stock = FgdParse('base_stock.fgd')

game = ""

filtered_ents = []

# First, remove all base content from the first FGD
for ent in fgd.entities:

    if ent.class_type == "BaseClass":
        continue

    print(f"Verifying {ent.name}...")
    
    existingEnt = False

    # Find the stock counterpart
    try:
        ent_s = fgd_stock.entity_by_name(ent.name)
        if ent_s:
            existingEnt = True
    except:
        # Draw from base classes instead
        ent_s = FilteredEnt();
        ent_s._properties = [];
        ent_s._spawnflags = [];
        ent_s._inputs = [];
        ent_s._outputs = [];
        for parent in ent.parents:
            ent_s._properties += parent.properties;
            ent_s._spawnflags += parent.spawnflags;
            ent_s._inputs += parent.inputs;
            ent_s._outputs += parent.outputs;
        pass
    
    # UNDONE: Don't list existing entities at all
    #try:
    #    ent_s = fgd_stock.entity_by_name(ent.name)
    #    if ent_s:
    #        continue
    #except:
    #    pass

    stock_properties = [prop.name for prop in ent_s._properties]
    stock_spawnflags = [prop.value for prop in ent_s._spawnflags]
    stock_inputs = [prop.name for prop in ent_s._inputs]
    stock_outputs = [prop.name for prop in ent_s._outputs]

    filtered_ent = FilteredEnt();
    filtered_ent.properties = [prop for prop in ent._properties if prop.name not in stock_properties]
    filtered_ent.spawnflags = [prop for prop in ent._spawnflags if prop.value not in stock_spawnflags]
    filtered_ent.inputs = [prop for prop in ent._inputs if prop.name not in stock_inputs]
    filtered_ent.outputs = [prop for prop in ent._outputs if prop.name not in stock_outputs]

    filtered_ent.properties = list(dict.fromkeys(filtered_ent.properties))
    filtered_ent.spawnflags = list(dict.fromkeys(filtered_ent.spawnflags))
    filtered_ent.inputs = list(dict.fromkeys(filtered_ent.inputs))
    filtered_ent.outputs = list(dict.fromkeys(filtered_ent.outputs))

    if len(filtered_ent.properties) == 0 and len(filtered_ent.spawnflags) == 0 and len(filtered_ent.inputs) == 0 and len(filtered_ent.outputs) == 0:
        print(f"Skipped {ent.name}")
        continue
    
    filtered_ent.icon = ""
    for d in ent.definitions:
        if d['name'] == "iconsprite":
            #filtered_ent.icon = f"assets/entities/{ent.name}.png"
            icon_file = d['args'][0].split("/")
            filtered_ent.icon = f"assets/entities/{icon_file[-1].split(".")[0]}.png"
            break

    filtered_ent.name = ent.name
    filtered_ent.description = ent.description
    filtered_ent.class_type = ent.class_type
    
    if existingEnt == True:
        filtered_ent.version = "-1"
    else:
        filtered_ent.version = ""

    filtered_ents.append(filtered_ent)

# Now write the articles themselves
for ent in filtered_ents:

    content = f"""---
layout: article_ent
title: {ent.name}
permalink: /docs/ents/{ent.name}/
breadcrumb: true
ent_icon: {ent.icon}
type: {ent.class_type}
mb_version: {ent.version}
game: {game}
---
"""

    content += f"\n{ent.description}\n\n<br>\n\n---\n"
	
	# TODO: Support choices
    if len(ent.properties) > 0:
        content += "\n### KeyValues\n"
        for prop in ent.properties:
             content += f"{{% include ent_kv.html	name=\"{prop.display_name}\"	desc=\"{prop.description}\"	internal=\"{prop.name}\"	type=\"{prop.value_type}\" %}}\n"

    if len(ent.spawnflags) > 0:
        content += "\n### Flags\n"
        for prop in ent.spawnflags:
             content += f"{{% include ent_sf.html	name=\"{prop.display_name}\"	bit=\"{prop.value}\" %}}\n"

    if len(ent.inputs) > 0:
        content += "\n### Inputs\n"
        for prop in ent.inputs:
             content += f"{{% include ent_io.html	name=\"{prop.name}\"	desc=\"{prop.description}\"	type=\"{prop.value_type}\" %}}\n"

    if len(ent.outputs) > 0:
        content += "\n### Outputs\n"
        for prop in ent.outputs:
             content += f"{{% include ent_io.html	name=\"{prop.name}\"	desc=\"{prop.description}\"	type=\"{prop.value_type}\" %}}\n"

    with open(f"fgd_output/{ent.name}.markdown", "w") as file:
        file.write(content)
        print(f"Wrote {ent.name}")
