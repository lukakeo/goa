# alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
# 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
# index1 = int(input())
# index2 = int(input())
# index3 = int(input())
# letter1 = alpha[index1]
# letter2 = alpha[index2]
# letter3 = alpha[index3]
# print(letter1 + letter2 + letter3)


# supported = ["lights off", "lock the door", "open the door", 
# "make coffee", "shut down"]
# password = str(input("enter password: ")).lower()
# if password not in supported:
#     print("you don't know the password")
# else:
#     print("you know the password")


floors = int(input("enter floors in building "))
for floor in range(5, floors + 1, 5):
    print(floor)