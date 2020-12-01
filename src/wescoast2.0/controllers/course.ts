import courses from "../models/course"
import { ListView } from "../views/list"

export class CourseController {
  rootElement: HTMLDivElement
  coursesList: ListView

  constructor(rootElement: HTMLDivElement) {
    this.rootElement = rootElement
    this.coursesList = new ListView(this.rootElement, courses, "course", ["title", "duration"])
  }

  render() {
    this.coursesList.render()
  }

  init() {
    this.render()
  }
}
