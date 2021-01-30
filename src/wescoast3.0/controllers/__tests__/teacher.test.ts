import * as teacherController from "../teacher"
import * as listView from "../../views/list-view"
import { teachers } from "../../models/teacher"

const listViewSpy = jest.spyOn(listView, "listView")

describe("teacherController", () => {
  test("when call init should render teacher controller correctly", () => {
    const parentElement = document.createElement("div") as HTMLDivElement
    const teacher = teacherController.teacherController(parentElement)

    const teacherInitSpy = jest.spyOn(teacher, "init")

    const title = "teachers"
    const subTitles = ["name", "email", "age"]

    teacher.init()

    expect(teacherInitSpy).toHaveBeenCalled()
    expect(listViewSpy).toHaveBeenCalledTimes(1)
    expect(listViewSpy).toHaveBeenCalledWith(parentElement, teachers, title, subTitles)
  })
})
