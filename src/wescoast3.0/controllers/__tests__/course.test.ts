import * as courseController from "../course"
import * as listView from "../../views/list-view"

const listViewSpy = jest.spyOn(listView, "listView")

describe("CorseController", () => {
  test("when call init should render course controller ", () => {
    const parentElement = document.createElement("div") as HTMLDivElement
    const course = courseController.courseController(parentElement)

    const courseInitSpy = jest.spyOn(course, "init")

    course.init()
    expect(courseInitSpy).toHaveBeenCalledTimes(1)
    expect(listViewSpy).toHaveBeenCalledTimes(1)
  })
})
