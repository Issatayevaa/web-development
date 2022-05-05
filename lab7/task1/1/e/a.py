def minf(a, b, c, d):
	print(min(min(a, b), min(c, d)))

a, b, c, d = map(int, input().split())
minf(a, b, c, d)
