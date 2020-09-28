# Defining and using the named tuple

from collections import namedtuple

City = namedtuple('City', 'name code population coordinates')
tokyo = City('Tokyo', 'JP', 36.933, (35.689722, 139.691667))

print(tokyo)            # printing the namedtuple
print(tokyo.population) # accessing the fields