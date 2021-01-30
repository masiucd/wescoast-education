import { Person } from "../../types"
import * as listView from "../list-view"

describe("listView", () => {
  test("listView takes in expected arguments, both showcase and init should been used ", () => {
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
    const subTitles = ["a", "b", "c"]

    const lv = listView.listView<Person>(parentElement, xs, title, subTitles)
    const lvSpy = jest.spyOn(lv, "init")

    lv.init()
    expect(lvSpy).toHaveBeenCalledTimes(1)
    expect(p.showCase).toHaveBeenCalledTimes(1)

    expect(typeof lv.onClick).toBe("function")
    expect(typeof lv.rawHtml).toBe("function")
  })
})
