import * as courseController from "../course"

describe("CorseController", () => {
  test("when call init should render course controller ", () => {
    const parentElement = document.createElement("div") as HTMLDivElement
    const course = courseController.courseController(parentElement)

    const courseInitSpy = jest.spyOn(course, "init")

    course.init()
    expect(courseInitSpy).toHaveBeenCalledTimes(1)
  })
})
