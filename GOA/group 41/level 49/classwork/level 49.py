#პროექტის აღწერა:
#პრობლემა: დაწერეთ პროგრამა, რომელიც ითვლის სტუდენტების ნიშნებს და განსაზღვრავს საუკეთესო სტუდენტს. მომხმარებელი შეიყვანს სტუდენტების სახელებსა და მათ ნიშანს, პროგრამა კი გამოთვლის
#საშუალო ნიშანს თითოეული სტუდენტისთვის და გამოაცხადებს საუკეთესოს.
def students():
    for s in range (20):
        student_name = str(input("enter your name "))
        student_scoreN1 = int(input("Enter your score (0-100): "))
        if student_scoreN1 <= 0:
            student_scoreN1 == 0
        elif student_scoreN1 >= 100:
            student_scoreN1 == 100

        student_scoreN2 = int(input("Enter your score (0-100): "))
        if student_scoreN2 <= 0:
            student_scoreN2 == 0
        elif student_scoreN2 >= 100:
            student_scoreN2 == 100

        student_scoreN3 = int(input("Enter your score (0-100): "))
        if student_scoreN3 <= 0:
            student_scoreN3 == 0
        elif student_scoreN3 >= 100:
            student_scoreN3 == 100
        break
    sum = student_scoreN1 + student_scoreN2 + student_scoreN3
    avg = sum / 3
    return avg



scores = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
def max_min(max , min):
    max == scores.max()
    min == scores.min()