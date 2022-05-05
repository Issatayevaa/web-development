n = input()
inp = list(map(int, input().split()))
print(len([inp[i] for i in range(len(inp)) if inp[i] > 0]))
