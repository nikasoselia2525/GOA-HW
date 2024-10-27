def get_grade(score1, score2, score3):
    average_score = (score1 + score2 + score3) / 3

    if average_score >= 90:
        return 'A'
    elif average_score >= 80:
        return 'B'
    elif average_score >= 70:
        return 'C'
    elif average_score >= 60:
        return 'D'
    else:
        return 'F'

score1 = int(input("Enter your first grade: "))
score2 = int(input("Enter your second grade: "))
score3 = int(input("Enter your third grade: "))

letter_grade = get_grade(score1, score2, score3)

average = (score1 + score2 + score3) / 3

print("The average score is: " + str(average))
print("The letter grade is: " + letter_grade)
