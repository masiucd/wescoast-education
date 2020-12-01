import { AppController } from "./wescoast2.0/controllers/app"
import { TeacherController } from "./wescoast2.0/controllers/teacher"
;(() => {
  new TeacherController(document.getElementById("teachers") as HTMLDivElement).init()
})()
