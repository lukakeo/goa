def printBill(customer_name):
    print("======")
    print(customer_name)
    print("======")
customer_name = input("Enter the customer's name: ")
printBill(customer_name)


def welcome(name):
    return f"Hello Dear {name}"
greet = str(input("enter your name "))
print(greet)


def area(x , y):
    return x * y
x = int(input("Enter length "))
y = int(input("Enter width "))
print(area(x , y))

def sum(x):
    res = 0
    for i in range(x):
        res+=i
    return res
print(sum(4))