import * as teacherController from "../teacher"

describe("teacherController", () => {
  test("when call init should render teacher controller ", () => {
    const parentElement = document.createElement("div") as HTMLDivElement
    const teacher = teacherController.teacherController(parentElement)

    const teacherInitSpy = jest.spyOn(teacher, "init")
    teacher.init()
    expect(teacherInitSpy).toHaveBeenCalled()
  })
})
