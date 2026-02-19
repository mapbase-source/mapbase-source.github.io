
#------------------------------------------------------------------------
# Converts VDC table to HTML
# Mainly used to migrate the entity list
#------------------------------------------------------------------------

with open("vdc_table.txt", "r", encoding='utf-8') as file:
    table_txt = file.read()

# Split all of the rows and columns
table_split = table_txt.split("\n")

class TableEnt:
    name = ""
    status = ""
    summary = ""

ents = []
cur_ent = TableEnt()
cur_row = 0

# Go through each line and sort them back into rows
for row in table_split:
    if row == "|-":
        ents.append(cur_ent)
        cur_ent = TableEnt()
        cur_row = 0
        continue
    
    match cur_row:
        case 0:
            row = row.replace("{{hl2}}", "(HL2)")
            row = row.replace("{{hl2ep2}}", "(HL2 EP2)")
            row = row.replace("}}", "")
            cur_ent.name = row[7:];
            #brackets = row.find("}}")
            #cur_ent.name = row[7:brackets];
        case 1:
            pipe = row[1:].find("|")
            cur_ent.status = row[pipe+2:-2];
        case 2:
            cur_ent.summary = row[1:];
            
            # Escape strings and replace templates
            cur_ent.summary = cur_ent.summary.replace("\"", "\\\"")
            cur_ent.summary = cur_ent.summary.replace("{{", "(")
            cur_ent.summary = cur_ent.summary.replace("}}", ")")
            cur_ent.summary = cur_ent.summary.replace("|", ": ")
    
    cur_row = cur_row + 1

# Convert to our new format
out_table = ""

for ent in ents:
    out_table += f"\t{{% include ent_list_row.html	name=\"{ent.name}\"		status=\"{ent.status}\"	summary=\"{ent.summary}\" %}}\n"
    print(f"Writing {ent.name}...")

with open("vdc_table_converted.txt", "w") as file:
    file.write(out_table)
    print(f"Successfully converted table")
