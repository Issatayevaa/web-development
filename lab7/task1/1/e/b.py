def power(a, n):
	k = 1
	for i in range(n):
		k *= a
	return k

a, n = map(int, input().split())
print(power(a, n))
