n = input()
inp = list(map(int, input().split()))
print(*[inp[i] for i in range(len(inp)) if not inp[i] % 2])
