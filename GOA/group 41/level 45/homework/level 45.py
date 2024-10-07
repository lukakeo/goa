def count_items(item_list, item):
    count = 0
    for i in item_list:
        if i == item:
            count += 1
    return count


def sum_of_list(num_list):
    total = 0
    for num in num_list:
        total += num
    return total


def average_of_list(num_list):
    total = 0
    count = 0
    for num in num_list:
        total += num
        count += 1
    if count == 0:
        return 0
    return total / count


def reverse_list(items):
    reversed_items = []
    for item in items:
    return reversed_items