# Build a list of Unicode codepoints from a string.

symbols = '$@₹fqf!'
codes = []

for s in symbols:
    codes.append(ord(s))

print(codes)