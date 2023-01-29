import csv
import json

POKEDEX = {}


with open('Pokedex_Ver_SV1.csv', encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        POKEDEX[row['Name']] = row

with open('pokemon.json', 'w') as outfile:
    json.dump(POKEDEX, outfile, indent=2, sort_keys=True)
