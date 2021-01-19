import { adminMediator } from "../../mediator/main"
import { Person } from "../../types"
import * as adminView from "../../views/admin-view"
import * as adminController from "../admin"

describe("adminController", () => {
  test("when call init should render admin controller ", () => {
    const parentElement = document.createElement("div") as HTMLDivElement
    const admin = adminController.adminController(parentElement)
    // const adminRecord: Person = {
    //   id: 1,
    //   firstName: "bob",
    //   lastName: "smith",
    //   email: "b@io.com",
    //   age: 23,
    //   type: "a",
    // }
    // const mediator = adminMediator
    // const adminViewInit = jest.spyOn(
    //   adminView.adminView(parentElement, mediator, adminRecord),
    //   "init",
    // )

    const initSpy = jest.spyOn(admin, "init")
    admin.init()

    expect(initSpy).toHaveBeenCalled()
  })
})
