import { nanoid } from "nanoid"
import { Teacher } from "./Teacher"
import { Student } from "./Student"
import { Subject } from "./Types"

export class Course {
  id: string
  subject: Subject
  students: Student[]
  teacher: Teacher
  constructor(id: string, subject: Subject, students: Student[], teacher: Teacher) {
    this.id = id
    this.subject = subject
    this.students = students
    this.teacher = teacher

    this.teacher.subjects.push(this.subject)
    this.students.forEach(student => {
      student.courses.push(this)
      console.log(this)
      console.log(student)
    })
  }

  removeStudent(studentID: string): void {
    this.students = this.students.filter(student => student.id !== studentID)
  }
  getStudent(studentID: string): Student | undefined {
    const student = this.students.find(student => student.id === studentID)
    return student && student
  }

  updateStudent(input: Student): void {
    const studentToUpdate = this.getStudent(input.id)
    if (!studentToUpdate) {
      throw new Error(`no user found with id ${input.id}`)
    }
    this.students = this.students.map(student =>
      student.id === input.id
        ? {
            ...student,
            firstName: input.firstName ? input.firstName : student.firstName,
            lastName: input.lastName ? input.lastName : student.lastName,
          }
        : student
    )
  }
  addStudent(student: Student) {
    this.students.push(student)
    student.courses.push(this)
  }
}
