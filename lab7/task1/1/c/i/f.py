a = int(input())
b = 0
 
for i in range(1, a+1):
    c = a % 10
    a = a // 10
    b = b * 10
    b = b + c  
 
print(b)
