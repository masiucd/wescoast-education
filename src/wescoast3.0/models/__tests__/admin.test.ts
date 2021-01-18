import * as admin from "../admin"
import { Person } from "../../types"
describe("admin model", () => {
  test("should create an admin model with expected values ", () => {
    const adminRecord: Person = {
      id: 1,
      firstName: "bob",
      lastName: "smith",
      email: "b@io.com",
      age: 23,
      type: "a",
    }

    const adminModel = admin.admin(adminRecord)

    expect(adminModel.id).toBe(adminRecord.id)
    expect(adminModel.age).toBe(adminRecord.age)
    expect(adminModel.firstName).toBe(adminRecord.firstName)
    expect(adminModel.lastName).toBe(adminRecord.lastName)
    expect(adminModel.type).toBe(adminRecord.type)

    const showCaseSpy = jest.spyOn(adminModel, "showCase")
    expect(adminModel.showCase().name).toBe(`${adminRecord.firstName} ${adminRecord.lastName}`)
    expect(adminModel.showCase().email).toBe(adminRecord.email)
    expect(adminModel.showCase().age).toBe(adminRecord.age.toString())

    expect(showCaseSpy).toHaveBeenCalledTimes(3)
  })
})
