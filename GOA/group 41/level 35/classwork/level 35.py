# for la in range(99999999):
#     queue = ["John" , "Amy" , "Bob" , "Adam"]
#     print(queue)
#     q = queue.append(str(input("enter your name ")))
#     queue.remove("John")
#     print(queue)
#     w = queue.append(str(input("enter your name ")))
#     queue.remove("Amy")
#     print(queue)
#     e = queue.append(str(input("enter your name ")))
#     queue.remove("Bob")
#     print(queue)
#     r = queue.append(str(input("enter your name ")))
#     queue.remove("Adam")
#     print(queue)
#     t = queue.append(str(input("enter your name ")))
#     queue.remove(r)
#     print(queue)
#     y = queue.append(str(input("enter your name ")))
#     queue.remove(t)
#     print(queue)
#     u = queue.append(str(input("enter your name ")))
#     queue.remove(y)
#     print(queue)
#     i = queue.append(str(input("enter your name ")))
#     queue.remove(u)
#     print(queue)
#     o = queue.append(str(input("enter your name ")))
#     queue.remove(i)
#     print(queue)
#     p = queue.append(str(input("enter your name ")))
#     queue.remove(o)
#     print(queue)
#     a = queue.append(str(input("enter your name ")))
#     queue.remove(p)
#     print(queue)
#     s = queue.append(str(input("enter your name ")))
#     queue.remove(a)
#     print(queue)
#     d = queue.append(str(input("enter your name ")))
#     queue.remove(s)
#     print(queue)
#     f = queue.append(str(input("enter your name ")))
#     queue.remove(d)
#     print(queue)
#     g = queue.append(str(input("enter your name ")))
#     queue.remove(f)
#     print(queue)
#     h = queue.append(str(input("enter your name ")))
#     queue.remove(g)
#     print(queue)
#     j = queue.append(str(input("enter your name ")))
#     queue.remove(h)
#     print(queue)
#     k = queue.append(str(input("enter your name ")))
#     queue.remove(j)
#     print(queue)
#     l = queue.append(str(input("enter your name ")))
#     queue.remove(k)
#     print(queue)
#     z = queue.append(str(input("enter your name ")))
#     queue.remove(l)
#     print(queue)
#     x = queue.append(str(input("enter your name ")))
#     queue.remove(z)
#     print(queue)
#     c = queue.append(str(input("enter your name ")))
#     queue.remove(x)
#     print(queue)
#     v = queue.append(str(input("enter your name ")))
#     queue.remove(c)
#     print(queue)
#     b = queue.append(str(input("enter your name ")))
#     queue.remove(v)
#     print(queue)
#     n = queue.append(str(input("enter your name ")))
#     queue.remove(b)
#     print(queue)
#     m = queue.append(str(input("enter your name ")))
#     queue.remove(n)
#     print(queue)
#     last = queue.append(str(input("enter your name ")))
#     queue.remove(m)
#     print(queue)
#     lastN2 = queue.append(str(input("enter your name ")))
#     queue.remove(q)
#     print(queue)


# fruits = ["apple", "banana", "cherry", "date", "elderberry"]
# print("Entire list:", fruits)
# print("First item:", fruits[0])
# print("Last item:", fruits[-1])
# fruits.append("fig")
# print("List after adding 'fig':", fruits)
# fruits.remove("banana")
# print("List after removing 'banana':", fruits)
# fruits[1] = "blueberry"
# print("List after changing the second item to 'blueberry':", fruits)
# print("Length of the list:", len(fruits))


numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers.append(100)
print("List after appending 100:", numbers)
numbers.insert(0, 5)
print("List after inserting 5 at the beginning:", numbers)
numbers.remove(30)
print("List after removing 30:", numbers)
numbers.sort()
print("List after sorting:", numbers)
numbers.reverse()
print("List after reversing:", numbers)
index_of_50 = numbers.index(50)
print("Index of 50:", index_of_50)
count_of_20 = numbers.count(20)
print("Count of 20:", count_of_20)