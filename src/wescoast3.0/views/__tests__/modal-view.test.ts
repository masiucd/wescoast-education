import { Person } from "../../types"
import { Service } from "../../mediator/service"
import * as modalView from "../modal-view"

jest.mock("../../mediator/service")

const mockedService = <jest.Mock<Service>>Service

beforeEach(() => {
  mockedService.mockClear()
})

describe("modal-view", () => {
  test("should renders correctly ", () => {
    const firstName = "John"
    const lastName = "Smith"
    const email = "john@io.com"
    const age = 45
    const p: Person = {
      id: 1,
      firstName,
      lastName,
      email,
      age,
      type: "a",
      showCase: jest.fn().mockImplementation(() => ({ name: name, email: email, age: age })),
    }

    const parentElement = document.createElement("div")

    const xs = [p]

    const title = "title"
    const subTitles = ["a", "b"]

    const mv = modalView.modalView(parentElement, p, xs, title, subTitles)

    const mvSpy = jest.spyOn(mv, "init")

    mv.init()
    expect(mvSpy).toHaveBeenCalled
    expect(p.showCase).toHaveBeenCalledTimes(1)

    expect(mockedService).toHaveBeenCalledTimes(1)
    expect(mockedService).toHaveBeenCalledWith(p.firstName)
  })
})
