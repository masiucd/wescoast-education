import { Person } from "../types"

const student = ({ id, firstName, lastName, email, age, type }: Person) => {
  const showCase = () => {
    return {
      name: `${firstName} ${lastName}`,
      email,
      age: `${age}`,
    }
  }

  return {
    id,
    firstName,
    lastName,
    email,
    age,
    type,
    showCase,
  }
}

type Student = typeof student
const students = [
  student({ id: 1, firstName: "bob", lastName: "smith", email: "bob@io.com", age: 17, type: "s" }),
  student({ id: 2, firstName: "joe", lastName: "jonsson", email: "joe@io.com", age: 18, type: "s" }),
  student({ id: 3, firstName: "philip", lastName: "oconnor", email: "ph@io.com", age: 16, type: "s" }),
  student({ id: 4, firstName: "anna", lastName: "franklin", email: "anna@io.com", age: 21, type: "s" }),
]

export { student, students, Student }
