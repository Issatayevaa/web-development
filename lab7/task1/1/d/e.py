n = input()
inp = list(map(int, input().split()))
print('YES' if [inp[i] for i in range(len(inp) - 1) if (inp[i + 1] >= 0 and inp[i] >= 0) or (inp[i + 1] < 0 and inp[i] < 0)] else 'NO')
