for i in range(1,100+1):
    print(i)
    if i %3 == 0:
        print("Fizz")
    elif i %5 == 0:
        print("Buzz")
    elif i %3 == 0 and i %5 == 0:
        print("FizzBuss")