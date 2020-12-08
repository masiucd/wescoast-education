import { teacherController } from "./wescoast3.0/controllers/teacher"
import { studentController } from "./wescoast3.0/controllers/student"
;(() => {
  studentController(document.getElementById("students") as HTMLDivElement).init()
  teacherController(document.getElementById("teachers") as HTMLDivElement).init()
})()
