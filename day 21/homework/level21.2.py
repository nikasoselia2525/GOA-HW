x = int(input("Enter Your first Score (1 to 100): "))
y = int(input("Enter Your second Score (1 to 100): "))
z = int(input("Enter Your therd Score (1 to 100): "))

nun = x + y + z

num = nun / 3

if num >= 70:
    print("you passed!")
elif num < 70:
    print("you failed!")
elif num < 0:
    print("write your real grades!")

