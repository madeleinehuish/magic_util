
import json

with open('../../data/originalData/sampleData.json') as json_data:
    data = json.load(json_data)
    print(data)

# get all keys of scryfall data
for property, value in vars(data).iteritems():
    print(property, ": ", value)
