# Tuples used as records

loss_angeles_airport_coordinates = (33.9425, -118.408056)
city, year, pop, chg, area = ('Tokyo', 2003, 32450, 0.66, 8014)
traveller_ids = [('USA', '31195855'), ('BRA', 'CE342567'), ('ESP', 'XDA205856')]

for passport in sorted(traveller_ids):
    print('%s/%s' %passport)

for country, _ in traveller_ids:
    print(country)
