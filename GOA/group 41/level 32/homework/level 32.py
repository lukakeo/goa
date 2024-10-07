def simple_calculator():
    num1 = float(input("Enter your first number: "))
    num2 = float(input("Enter your second number: "))
    valid_operations = ['+', '-', '*', '**', '/', '//']
    operation = input("Enter one of these symbols + , - , * , ** , / , //: ")
    if operation in valid_operations:
        if operation == "+":
            result = num1 + num2
        elif operation == "-":
            result = num1 - num2
        elif operation == "*":
            result = num1 * num2
        elif operation == "**":
            result = num1 ** num2
        elif operation == "/":
            if num2 != 0:
                result = num1 / num2
            else:
                print("Division by zero is not allowed.")
                return
        elif operation == "//":
            if num2 != 0:
                result = num1 // num2
            else:
                print("Division by zero is not allowed.")
                return
        print("The result is: " + result)
    else:
        print("Invalid operation. Please try again.")
simple_calculator()