import { Person } from "./person"
import { Course } from "./course"
import { nanoid } from "nanoid"

export class Student extends Person {
  courses: Course[]
  constructor(id: string, firstName: string, lastName: string, email: string, age: number) {
    super(id, firstName, lastName, email, age)
    this.courses = []
  }

  showCase() {
    return {
      name: `${this.firstName}-${this.lastName}`,
      email: this.email,
      age: this.age,
    }
  }
}

export default [
  new Student(nanoid(), "Gunnar", "Gren", "gunnar@io.com", 15),
  new Student(nanoid(), "Bobby", "Charlton", "bobby@io.com", 18),
  new Student(nanoid(), "Linda", "Lings", "linda@io.com", 13),
  new Student(nanoid(), "Jenny", "Rashford", "jenny@io.com", 12),
  new Student(nanoid(), "Billy", "Cambell", "billy@io.com", 19),
]
