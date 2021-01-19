import * as studentController from "../student"

describe("studentController", () => {
  test("when call init should render student controller ", () => {
    const parentElement = document.createElement("div") as HTMLDivElement
    const course = studentController.studentController(parentElement)

    const studentInitSpy = jest.spyOn(course, "init")
    course.init()
    expect(studentInitSpy).toHaveBeenCalled()
  })
})
