import { Person } from "../types"

const teacher = ({ id, firstName, lastName, email, age, type }: Person) => {
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

const teachers = [
  teacher({
    id: 1,
    firstName: "mark",
    lastName: "smith",
    email: "mark@io.com",
    age: 37,
    type: "t",
  }),
  teacher({
    id: 2,
    firstName: "george",
    lastName: "pierre",
    email: "pierre@io.com",
    age: 48,
    type: "t",
  }),
  teacher({ id: 3, firstName: "carl", lastName: "carl", email: "carl@io.com", age: 36, type: "t" }),
  teacher({ id: 4, firstName: "bob", lastName: "rooney", email: "bob@io.com", age: 31, type: "t" }),
]

type Teacher = typeof teacher

export { teacher, teachers, Teacher }
