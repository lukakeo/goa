x = int(input("enter your number : "))
y = int(input("enter your number : "))
print(x + y)
print(x - y)
print(x * y)
print(x ** y)
print(x / y)
print(x // y)


name = str(input("enter your name : ")).upper()
print("HELLO " + name + " AND " " WELCOME")


def love():
    return " i love u with love luka 😎"


def bio():
    return "My Name is Luka My Lastname is Tamazashvili i live in coutry Georgia in City Rustavi I dont have any hobby and etc."


def calculate_area(lenght , width):
    calculate_area == lenght * width


def find_max(num1 , num2):
    if num1 > num2:
        print(num1 + "Is greater")
    elif num1 < num2:
        print(num2 + "Is greater")
    else:
        print("They equal")


def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    elif number % 1 == 0:
        return "Odd"