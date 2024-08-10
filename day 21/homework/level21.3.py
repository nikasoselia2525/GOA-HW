age = int(input("enter your age: "))
xp = int(input("how long have you been driving a car?(years): "))
if age >= 18 and xp >= 1:
    print("you passed!")
elif xp < 1:
    print("you dont have enough experiance!")
elif xp >= age - 10:
    print("why are you driving without license?")
else:
    print("you are too young")












