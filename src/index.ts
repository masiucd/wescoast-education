import { teacherController } from "./wescoast3.0/controllers/teacher"
import { studentController } from "./wescoast3.0/controllers/student"
import { adminController } from "./wescoast3.0/controllers/admin"
;(() => {
  studentController(document.getElementById("students") as HTMLDivElement).init()
  teacherController(document.getElementById("teachers") as HTMLDivElement).init()
  adminController(document.getElementById("admin") as HTMLDivElement).init()
})()
