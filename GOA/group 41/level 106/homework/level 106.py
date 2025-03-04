def year(leap):
    if leap % 4 == 0 and leap % 100 != 0 or leap % 400 == 0:
        return "it's a leap year"
    else:
        return "it's not a leap year"   