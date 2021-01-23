import * as adminView from "../../views/admin-view"
import * as adminController from "../admin"

const adminViewSpy = jest.spyOn(adminView, "adminView")

describe("adminController", () => {
  test("when creating a new admin controller adminView should also been called ", () => {
    const parentElement = document.createElement("div") as HTMLDivElement
    const admin = adminController.adminController(parentElement)
    expect(adminViewSpy).toHaveBeenCalled()

    const initSpy = jest.spyOn(admin, "init")
    admin.init()
    expect(initSpy).toHaveBeenCalledTimes(1)
  })
})
