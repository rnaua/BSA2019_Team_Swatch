import json
import csv
# open full list of "drinks"
with open('search_name.json') as a:
    data = json.load(a)

# convert and save into csv file
with open('search_name_cleaned.csv', mode='w') as csv_file:
    name_writer = csv.writer(csv_file, delimiter=",", quoting=csv.QUOTE_ALL)
    for i in range(len(data['drinks'])):
        name_writer.writerow([data['drinks'][i]['strDrink'], data['drinks'][i]['strDrink']])







