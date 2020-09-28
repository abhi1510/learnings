# Cartesian product in a generator expression

colors = ['black', 'white']
sizes = ['S', 'M', 'L']

tshirts = ((c, s) for c in colors for s in sizes)
for c, s in tshirts:
    print('%s %s' %(c, s))