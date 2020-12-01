import { CourseController } from "./course"
import { StudentController } from "./student"
import { TeacherController } from "./teacher"

export class AppController {
  teacherController: TeacherController
  studentsController: StudentController
  courseController: CourseController

  constructor(
    teacherController: TeacherController,
    studentsController: StudentController,
    courseController: CourseController
  ) {
    this.teacherController = teacherController
    this.studentsController = studentsController
    this.courseController = courseController
  }

  render() {
    this.teacherController.init()
    this.studentsController.init()
    this.courseController.init()
  }
}
