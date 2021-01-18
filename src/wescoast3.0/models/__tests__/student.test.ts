import { Person } from "../../types"
import * as student from "../student"

describe("student model", () => {
  test("should create an student model with expected values ", () => {
    const studentRecord: Person = {
      id: 1,
      firstName: "sten",
      lastName: "jonsson",
      email: "s@io.com",
      age: 13,
      type: "s",
    }
    const studentModel = student.student(studentRecord)

    expect(studentModel.id).toBe(studentRecord.id)
    expect(studentModel.age).toBe(studentRecord.age)
    expect(studentModel.firstName).toBe(studentRecord.firstName)
    expect(studentModel.lastName).toBe(studentRecord.lastName)
    expect(studentModel.type).toBe(studentRecord.type)

    const showCaseSpy = jest.spyOn(studentModel, "showCase")
    expect(studentModel.showCase().name).toBe(
      `${studentRecord.firstName} ${studentRecord.lastName}`,
    )
    expect(studentModel.showCase().email).toBe(studentRecord.email)
    expect(studentModel.showCase().age).toBe(studentRecord.age.toString())

    expect(showCaseSpy).toHaveBeenCalledTimes(3)
  })
})
