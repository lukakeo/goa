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

def  students_score(students_score):
    students_score = [65 , 60 , 43 , 65 , 5 , 64 , 31 , 33 , 91 , 3 , 92 , 53 , 95 , 41 , 7 , 33 , 67 , 21 , 85 , 44]
    return students_score > 50


def arr(arr):
    arr == input("enter numbers")
    arr = []
    return arr[::-1]


def average(sum_of_numbers , amount_of_numbers):
    sum_of_numbers == int(input("enter sum of numbers "))
    amount_of_numbers == int(input("enter amount of numbers "))
    return sum_of_numbers / amount_of_numbers