import { Person } from "../types"

const admin = ({ id, firstName, lastName, email, age, type }: Person) => {
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

export { admin }
