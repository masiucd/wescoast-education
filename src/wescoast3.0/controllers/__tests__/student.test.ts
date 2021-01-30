import * as listView from "../../views/list-view"
import * as studentController from "../student"
import { students } from "../../models/student"

const listViewSpy = jest.spyOn(listView, "listView")

describe("studentController", () => {
  test("when call init should render student controller ", () => {
    const parentElement = document.createElement("div") as HTMLDivElement
    const student = studentController.studentController(parentElement)
    const title = "students"
    const subTitles = ["name", "email", "age"]
    const studentInitSpy = jest.spyOn(student, "init")

    student.init()

    expect(studentInitSpy).toHaveBeenCalled()
    expect(listViewSpy).toHaveBeenCalledTimes(1)
    expect(listViewSpy).toHaveBeenCalledWith(parentElement, students, title, subTitles)
  })
})
