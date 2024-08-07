# დავალება: მომხმარებელს შემოატანინეთ სახელი თუ მისი სახელი თუ უდრის 
# თქვენ სახელს მაშინ გამოგვიტანოს True ხოლო სხვა შემთხვევაში False

name = input("enter your name : " )

if name == "Luka" or name == "luka":
    print(True)
else :
    print(False)

# დავალება2: მომხმარებელს შემატანინეთ რიცხვი თუ რიცხვი იყო 0 მეტი 
# და 10 ნაკლები მაშინ დაგვიპრინტოს True ხოლო სხვა შემთხვევაში False

number = int(input("enter your number : " ))
if number < 10 and number > 0 :
    print (True)
else :
    print(False)


# გაკეთეთ 20 მაგალითი შედარებით ოპერატორებზე

print(5==5)
print(32==32)
print(61==61)
print(2==7)
print(5<=5)
print(83<=8)
print(54<=67)
print(33<=126)
print(4>=12)
print(15>=152)
print(25>=23)
print(62<23)
print(32<5)
print(92<6)
print(37>15)
print(57>834)
print(26>323)
print(12!=52)
print(24!=523)
print(23!=43)