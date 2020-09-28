# Named tuple attributes and methods

from collections import namedtuple

City = namedtuple('City', 'name code population coordinates')
tokyo = City('Tokyo', 'JP', 36.933, (35.689722, 139.691667))

print(tokyo._fields)    # attribute _fields
print(tokyo._asdict())  # as_dict method

make_tokyo = City._make(tokyo)
print(make_tokyo)       # _make method

