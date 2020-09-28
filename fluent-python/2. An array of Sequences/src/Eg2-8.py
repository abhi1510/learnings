# Unpacking the nested tuples to access the longitude

metro_areas = [
    ('Tokyo', 'JP', 36.933, (35.689722, 139.691667)),
    ('Delhi', 'IN', 21.935, (21.613889, 77.208889))
]

for name, cc, pop, (lat, lng) in metro_areas:
    print('%s-%s=%s (%s %s)' %(name, cc, pop, lat, lng))
