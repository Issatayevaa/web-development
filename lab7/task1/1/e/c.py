def xor(x, y):
	return bool(x) ^ bool(y)

a, b = map(int, input().split())
print(int(xor(a, b)))
