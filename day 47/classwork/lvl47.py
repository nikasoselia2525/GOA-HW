# def search(text, word):
#     if word in text:
#         print("Word found")
#     else:
#         print("Word not found")

# search(input("enter your text: "), input("enter your word: "))

# ==================================================

# def word_count(text):
#     words = text.split()
#     return len(words)

# text = "i love python"
# result = word_count(text)
# print("word count: " , result)

# ==================================================

# def check_number(num):
#     if num > 0:
#         print("number is positive")
#     elif num < 0:
#         print("number is negative")
#     else:
#         print("number is zero")

# check_number(int(input("enter your number: ")))

# ==================================================

def age_category(age):
    if age <= 12:
        print("child")
    elif age <= 19:
        print("teenager")
    elif age <= 35:
        print("young")
    elif age <= 59:
        print("adoult")
    else:
        print("old")
age_category(int(input("enter uour age: ")))















