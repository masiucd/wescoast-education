import { Person } from "./person"
import { Course } from "./course"

export class Student extends Person {
  courses: Course[]
  constructor(id: string, firstName: string, lastName: string, email: string, age: number) {
    super(id, firstName, lastName, email, age)
    this.courses = []
  }
}
