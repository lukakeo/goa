# and operator

# Logical Operator
# 1) 'and' operator
# 2) 'or' operator

print(True and True)   #True
print(True and False)  #False
print(False and True)  #False
print(False and False) #False

# or operator

# 1)პირობა
# 2)ოპერატორი
# 3)პირობა


#   (1)  (2)  (3)

print(True or True)   #True
print(True or False)  #True
print(False or True)  #True
print(False or False) #True

# True and True
# True - ამ შემთხვევაში არის გადაცემული მნიშვნელობები
#ხოლო and - არის ოპერატორი რომელმაც უნდა გამოიტანოს საბოლოო მნიშვნელობა ეს შეიძლება იყოს True ან False

# Take steps andminutes as inputs
steps = int(input("enter your todays steps" ))
active_minutes = int(input("enter how many minutes was you walking" ))

if steps >= 10000 :
    print("goal_achieved")
else :
    print("goal_is_not_achieved")

if active_minutes >= 30 :
    print("goal_achieved")
else :
    print("goal_is_not_achieved")