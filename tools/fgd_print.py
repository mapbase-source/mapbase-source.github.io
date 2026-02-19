
#------------------------------------------------------------------------
# Prints FGD entities
# Requires https://github.com/pySourceSDK/ValveFGD
#------------------------------------------------------------------------

#import sys

from valvefgd import FgdParse

# Replace with relevant FGDs
fgd = FgdParse('halflife2_stock.fgd') # sys.argv[1:]

print(f"{len(fgd.entities)} entities")

# First, remove all base content from the first FGD
for ent in fgd.entities:

    print(f"{ent.name}:")
    
    if len(ent.properties) > 0:
        print(f"- Keyvalues:")
        for prop in ent.properties:
            print(f"\t- \"{prop.display_name}\"\t\"{prop.description}\"")
    
    if len(ent.spawnflags) > 0:
        print(f"- Flags:")
        for prop in ent.spawnflags:
            print(f"\t- \"{prop.display_name}\"")
    
    if len(ent.inputs) > 0:
        print(f"- Inputs:")
        for prop in ent.inputs:
            print(f"\t- \"{prop.name}\"\t\"{prop.description}\"")
    
    if len(ent.outputs) > 0:
        print(f"- Outputs:")
        for prop in ent.outputs:
            print(f"\t- \"{prop.name}\"\t\"{prop.description}\"")
