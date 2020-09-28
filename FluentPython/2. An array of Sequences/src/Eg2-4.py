# Cartesian product using list comprehension

colors = ['black', 'white']
sizes = ['S', 'M', 'L']

tshirts = [(c, s) for c in colors for s in sizes]
print(tshirts)