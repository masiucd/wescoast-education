import { AppController } from "./wescoast2.0/controllers/app"
import { StudentController } from "./wescoast2.0/controllers/student"
import { TeacherController } from "./wescoast2.0/controllers/teacher"
import { CourseController } from "./wescoast2.0/controllers/course"
;(() => {
  const createElement = (tag: string, className: string): HTMLElement => {
    const element = document.createElement(tag)
    element.classList.add(className)
    return element
  }

  new AppController(
    new TeacherController(document.getElementById("teachers") as HTMLDivElement),
    new StudentController(document.getElementById("students") as HTMLDivElement),
    new CourseController(document.getElementById("courses") as HTMLDivElement)
  ).render()
})()
