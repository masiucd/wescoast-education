import { ListView } from "../views/list"
import students from "../models/student"
export class StudentController {
  rootElement: HTMLDivElement
  studentsList: ListView

  constructor(rootElement: HTMLDivElement) {
    this.rootElement = rootElement
    this.studentsList = new ListView(this.rootElement, students, "Students", [
      "name",
      "email",
      "age",
    ])
  }

  renderStudent(): void {
    this.studentsList.render()
  }

  init(): void {
    this.renderStudent()
  }
}
