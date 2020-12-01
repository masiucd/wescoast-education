import { Person } from "./person"
import { Subject } from "../types"
import { nanoid } from "nanoid"
export class Teacher extends Person {
  subjects: Subject[]
  constructor(id: string, firstName: string, lastName: string, email: string, age: number) {
    super(id, firstName, lastName, email, age)
    this.subjects = []
  }
}

export default [
  new Teacher(nanoid(), "Frank", "Smith", "frank@io.com", 43),
  new Teacher(nanoid(), "Logan", "Jonsson", "logan@io.com", 47),
  new Teacher(nanoid(), "Mia", "Greger", "mia@io.com", 41),
  new Teacher(nanoid(), "Boris", "Rooney", "frank@io.com", 53),
]
