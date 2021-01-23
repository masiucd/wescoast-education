import { AdminMediator } from "../../mediator/main"
import { Service } from "../../mediator/service"
import { Person } from "../../types"
import * as adminView from "../admin-view"

jest.mock("../../mediator/main")
jest.mock("../../mediator/service")

const mockedService = <jest.Mock<Service>>Service
const mockedAdminMediator = <jest.Mock<AdminMediator>>AdminMediator

beforeEach(() => {
  mockedService.mockClear()
  mockedAdminMediator.mockClear()
})

describe("admin-view", () => {
  test("when creating a new admin view, both AdminMediator and Service should been called", () => {
    const parentElement = document.createElement("div")
    const mediator = new AdminMediator()
    const admin: Person = {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      email: "g@io.com",
      age: 45,
      type: "a",
    }
    const view = adminView.adminView(parentElement, mediator, admin)
    const viewSpy = jest.spyOn(view, "init")

    view.init()
    expect(viewSpy).toHaveBeenCalledTimes(1)
    expect(mockedService).toHaveBeenCalledTimes(1)
    expect(mockedAdminMediator).toHaveBeenCalledTimes(1)

    expect(mockedService).toHaveBeenCalledWith(admin.firstName)
  })
})
