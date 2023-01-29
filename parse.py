import csv
import json
from collections import defaultdict

POKEDEX = defaultdict(dict)
KEYS = {
    "Name",
    "Type1",
    "Type2",
    "Ability1",
    "Ability2",
    "Ability_Hidden",
    "Color",
    "Category",
    "Generation",
    "No",
}

with open("Pokedex_Ver_SV1.csv", encoding="utf-8-sig") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        POKEDEX[row["Generation"]][row["Name"]] = {
            key: value for key, value in row.items() if key in KEYS
        }

for gen in POKEDEX:
    with open(f"pokemon-{gen}.json", "w") as outfile:
        json.dump(POKEDEX[gen], outfile, indent=2, sort_keys=True)
