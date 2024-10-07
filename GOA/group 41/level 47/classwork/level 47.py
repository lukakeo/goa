# 1

import re

text = input()
word = input()
s = re.search(word, text)
if s:
    print("word found")
else:
    print("word not found")

# 2

def func(words):
    words = input("Enter text ")
    word_count = len(words.split())
    print("Number of words:", word_count)
func()

# 3

su = int(input("enter your number "))
if su == 0:
    print("zero")
elif su > 0:
    print("positive")
else:
    print("negative")

# 4

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