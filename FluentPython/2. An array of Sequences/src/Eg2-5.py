# Initialize a tuple and an array from a generator expression

symbols = '$@₹fqf!'

my_gen = (ord(s) for s in symbols)
print(tuple(my_gen))