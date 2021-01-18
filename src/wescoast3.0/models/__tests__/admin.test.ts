import * as admin from "../admin"
import { Person } from "../../types"
describe("admin controller", () => {
  test("should create a admin model with expected values ", () => {
    const adminRecord: Person = {
      id: 1,
      firstName: "bob",
      lastName: "smith",
      email: "b@io.com",
      age: 23,
      type: "a",
    }

    const a = admin.admin(adminRecord)

    expect(a.id).toBe(adminRecord.id)
    expect(a.age).toBe(adminRecord.age)
    expect(a.firstName).toBe(adminRecord.firstName)
    expect(a.lastName).toBe(adminRecord.lastName)
    expect(a.type).toBe(adminRecord.type)
  })
})
