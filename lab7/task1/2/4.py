n, m = map(int, input().split())
L = [list(map(float, input().split())) for i in range(m)]
for i in range(n):
    s = 0
    for j in range(m):
       s += L[j][i]
    print(s / m)
