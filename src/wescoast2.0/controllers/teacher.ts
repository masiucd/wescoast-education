import { ListView } from "../views/list"
import teachers from "../models/teacher"
export class TeacherController {
  rootElement: HTMLDivElement
  teachersList: ListView
  constructor(rootElement: HTMLDivElement) {
    this.rootElement = rootElement
    this.teachersList = new ListView(this.rootElement, teachers, "Teachers", [
      "firstName",
      "LastName",
      "age",
    ])
  }

  renderTeachers() {
    this.teachersList.render()
  }

  init() {
    this.renderTeachers()
  }
}
