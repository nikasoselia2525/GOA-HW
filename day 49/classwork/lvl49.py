def find_best_student():
    students = {}
    
    num_students = int(input("How many students?: "))
    
    for _ in range(num_students):
        name = input("Enter the student's name: ")
        
        grades_input = input("Enter " + name + "'s grades: ")
        grades = [int(g) for g in grades_input.split(',')]

        average = sum(grades) / len(grades)

        students[name] = average

    best_student = max(students, key=students.get)

    print("The best student is " + best_student + " with an average grade of: " + str(students[best_student]))


find_best_student()



def student_scores_analysis(scores):

    max_score = max(scores)
    min_score = min(scores)

    average_score = sum(scores) / len(scores)

    print ({
        "max_score": max_score,
        "min_score": min_score,
        "average_score": average_score
    })

scores = [85, 90, 78, 92, 88]

result = student_scores_analysis(scores)

print("Maximum score:", result["max_score"])
print("Minimum score:", result["min_score"])
print("Average score:", result["average_score"])





