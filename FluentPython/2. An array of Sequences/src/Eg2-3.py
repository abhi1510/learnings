# The same list build by list comprehension and a map filter composition

symbols = '$@₹fqf!'

beyond_ascii = [ord( s) for s in symbols if ord(s)>127]
print(beyond_ascii)

beyond_ascii = list(filter(lambda x: x>127, map(ord, symbols)))
print(beyond_ascii)