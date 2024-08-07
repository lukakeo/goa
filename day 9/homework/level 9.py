# 1) გააკეთეთ 30 მაგალითი შედარებით ოპერატორებზე.

print(5==5)
print(32==32)
print(61==61)
print(2==7)
print(2==23)
print(5<=5)
print(83<=8)
print(54<=67)
print(33<=126)
print(14<=524)
print(83>=672)
print(4>=12)
print(15>=152)
print(25>=23)
print(21>=23)
print(62<23)
print(32<5)
print(92<6)
print(17<15)
print(62<5)
print(64>0)
print(37>15)
print(57>834)
print(26>323)
print(15>123)
print(12!=52)
print(24!=523)
print(23!=43)
print(82!=82)
print(2!=2)

#2) დაწერეთ პროგრამა, რომელიც იღებს ორი ადამიანის ასაკს და განსაზღვრავს ვინ არის უფროსი.

#ნაბიჯები:

#შესთავაზეთ მომხმარებელს შეიყვანოს პირველი პირის ასაკი.
#სთხოვეთ მომხმარებელს შეიყვანოს მეორე პირის ასაკი.
#შეადარეთ ორი ასაკი შედარების ოპერატორების გამოყენებით.
#გამოიტანეთ შეტყობინება, რომელიც მიუთითებს იმაზე, თუ ვინ არის უფროსი ან იმავე ასაკის.

num_1 = int(input("how old is first person : " ))
num_2 = int(input("how old is second person : " ))

if num_1 < num_2 :
    print("მეორე პირი არის უფროსი")
elif num_1 > num_2 :
    print("პირიველი პირი არის უფროსი")
else :
    print("პირველი და მეორე პირი ერთმანეთის ტოლია")

score = int(input("enter your score : "))
if score > 100 :
    print("congratulation you are ready for next level ")
else :
    print("you dont have enough score for next level")