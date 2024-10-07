numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
first_half = numbers[:5]
second_half = numbers[5:]
squares = [x**2 for x in numbers]
print(first_half)
print(second_half)
print(squares)

temperatures = [72 , 68 , 75 , 70 , 78 , 74 , 71]
print(temperatures)
max_temp = max(temperatures)
print(max_temp)
min_temp = min(temperatures)
print(min_temp)
average_temp = sum(temperatures)
print(average_temp/7)
above_70 = [temp for temp in temperatures if temp > 70]
print(above_70)