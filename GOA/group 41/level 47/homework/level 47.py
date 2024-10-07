def func(words):
    words = input("Enter text ")
    word_count = len(words.split())
    print("Number of words:", word_count)
func()


su = int(input("enter your number "))
if su == 0:
    print("zero")
elif su > 0:
    print("positive")
else:
    print("negative")


age = int(input("enter your age in years "))
if age <= 1:
    print("you are a baby")
elif age >= 1 <= 3:
    print("you are a toddler")
elif age >= 4 <= 12:
    print("you are a child")
elif age >= 13 <= 19:
    print("you are a teenager")
elif age >= 16 <= 24:
    print("young person")
else:
    print("you are an adult")


def split_even_odd(numbers):
    evens = list()
    odds = list()
    for num in numbers:
        if num % 2 == 0:
            evens.append(num)
        else:
            odds.append(num)
    return evens, odds


def find_average(numbers):
    total = 0
    for num in numbers:
        total += num
    average = total / len(numbers)
    return average