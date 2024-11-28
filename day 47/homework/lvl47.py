# def count_words(text):
#     words = text.split()
#     print(len(words))
# count_words(input("enter words: "))

#===========================================================================================

# def check_number(num):
#     if num > 0:
#         print("number is positive")
#     elif num < 0:
#         print("number is negative")
#     else:
#         print("number is zero")

# check_number(int(input("enter your number: ")))

#===========================================================================================

# def age_category(age):
#     if age <= 12:
#         print("child")
#     elif age <= 19:
#         print("teenager")
#     elif age <= 35:
#         print("young")
#     elif age <= 59:
#         print("adoult")
#     else:
#         print("old")
# age_category(int(input("enter uour age: ")))

#===========================================================================================

# def separate_even_odd(num_list):
#     even_numbers = []
#     odd_numbers = []
    
#     for num in num_list:
#         if num %2:
#             even_numbers.append(num)
#         else:
#             odd_numbers.append(num)
    
#     print(even_numbers, odd_numbers)
# separate_even_odd(int(input("enter first number: ")),int(input("enter second number: ")),int(input("enter therd number: ")))

#===========================================================================================

# def average_of_list(a,b):
#     num=(a+b)
#     print(num / 2)
# average_of_list(int(input("enter first number: ")),int(input("enter second number: ")))