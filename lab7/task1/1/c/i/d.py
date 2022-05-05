x, d = int(input()), int(input())
list_of_d = list(str(x))
cnt=0
for i in list_of_d:
	if i==str(d):
		cnt+=1
print(cnt)
