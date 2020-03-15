import json
import csv
# open full list of "ingredients"
with open('ingredients.json') as a:
    data = json.load(a)

# convert and save into csv file
with open('finding_list_ingredients.csv', mode='w') as csv_file:
    name_writer = csv.writer(csv_file, delimiter=",", quoting=csv.QUOTE_ALL)
    for i in range(len(data['drinks'])):
        name_writer.writerow([data['drinks'][i]['strIngredient1'], data['drinks'][i]['strIngredient1']])


