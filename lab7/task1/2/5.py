x, k = map(int, input().split())
print(eval(input().replace('x', f'{x}')) == k)
