import { TeacherController } from "./teacher"

export class AppController {
  teacherController: TeacherController

  constructor(teacherController: TeacherController) {
    this.teacherController = teacherController
  }

  render() {
    this.teacherController.init()
  }
}
