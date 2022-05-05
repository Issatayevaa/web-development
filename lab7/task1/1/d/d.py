n = input()
inp = list(map(int, input().split()))
print(len([inp[i] for i in range(len(inp) - 1) if inp[i + 1] > inp[i]]))
