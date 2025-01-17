#Tuple გვჭირდება მაშინ, როდესაც გვინდა მყარი, არამომზარდი მონაცემების შენახვა
#Set კი გვჭირდება, როდესაც უნდა შევინახოთ უნიკალური ელემენტები, რათა თავიდან ავიცილოთ დუპლიკატები


person = ("John", 25)
name, age = person
print(name)  # John
print(age)   # 25




person = ("John", 25)
name, _ = person
print(name)


person = ("John", (25, "New York"))
name, (age, city) = person
print(name)
print(age)
print(city)





list1 = [1, 2, 2, 3, 4, 4, 5, 5, 5]
print("Before set:", list1)

unique_elements = set(list1)
print("After set:", unique_elements)