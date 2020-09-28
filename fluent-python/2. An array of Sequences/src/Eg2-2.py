# Build a list of Unicode codepoints from a string using list comprehension

symbols = '$@₹fqf!'

codes = [ord( s) for s in symbols]
print(codes)