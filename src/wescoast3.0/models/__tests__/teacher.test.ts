import { Person } from "../../types"
import * as teacherModel from "../teacher"

describe("teacher model", () => {
  test("should create an teacher model with expected values ", () => {
    const studentRecord: Person = {
      id: 1,
      firstName: "boris",
      lastName: "jonsson",
      email: "boris@io.com",
      age: 45,
      type: "t",
    }
    const teacher = teacherModel.teacher(studentRecord)

    expect(teacher.id).toBe(studentRecord.id)
    expect(teacher.age).toBe(studentRecord.age)
    expect(teacher.firstName).toBe(studentRecord.firstName)
    expect(teacher.lastName).toBe(studentRecord.lastName)
    expect(teacher.type).toBe(studentRecord.type)

    const showCaseSpy = jest.spyOn(teacher, "showCase")
    expect(teacher.showCase().name).toBe(`${studentRecord.firstName} ${studentRecord.lastName}`)
    expect(teacher.showCase().email).toBe(studentRecord.email)
    expect(teacher.showCase().age).toBe(studentRecord.age.toString())

    expect(showCaseSpy).toHaveBeenCalledTimes(3)
  })
})
