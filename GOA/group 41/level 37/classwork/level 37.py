msg = input()
same_msg = msg.replace("#" , " ")
print(same_msg)

name = input("Enter your name: ")
age = input("Enter your age: ")
formatted_string = "Hello, {}. You are {} years old.".format(name, age)
print(formatted_string)

words = ["Python" , "is" , "fun"]
words_combined = ", ".join(words)
print(words_combined)

sentence = str(input("enter sentence "))
new_sentence = sentence.split()
print(new_sentence)

sentenceN2 = str(input("enter sentence "))
word_to_replace = str(input("enter word to replace "))
replaced_word = str(input("enter what word do you want to replace it with "))
modified = sentenceN2.replace(word_to_replace , replaced_word)
print(modified)

mIXeD = "HEllO WorLd!"
mixed = mIXeD.lower()
print(mixed)

upper = str(input("enter lower case sentence"))
new_upper = upper.upper()
print(new_upper)