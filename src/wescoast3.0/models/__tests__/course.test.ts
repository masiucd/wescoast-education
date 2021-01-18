import * as course from "../course"

describe("course model", () => {
  test("should create an course model with expected values ", () => {
    const id = 1
    const title = "math"
    const about = "about"
    const duration = "1h"
    const courseModel = course.course(id, title, about, duration)

    expect(courseModel.id).toBe(id)
    expect(courseModel.title).toBe(title)
    expect(courseModel.about).toBe(about)
    expect(courseModel.duration).toBe(duration)

    const showCaseSpy = jest.spyOn(courseModel, "showCase")
    expect(courseModel.showCase().title).toBe(title)
    expect(courseModel.showCase().duration).toBe(duration)
    expect(showCaseSpy).toHaveBeenCalledTimes(2)
  })
})
