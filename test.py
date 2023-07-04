import ratemyprofessor

professor = ratemyprofessor.get_professor_by_school_and_name(
    ratemyprofessor.get_school_by_name("Queen's University at Kingston"), "Tian")

print(professor.name)
print(professor.difficulty)
