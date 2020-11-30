import { Course } from "./school/data/Course"
import { Teacher } from "./school/data/Teacher"
import { Student } from "./school/data/Student"
import { View } from "./school/view/View"

import { nanoid } from "nanoid"
;(() => {
  function controller() {
    const mike = new Student(nanoid(), "Mike", "Szymkowiak", [])
    const jon = new Student(nanoid(), "Jon", "Smith", [])
    const clara = new Student(nanoid(), "Clara", "Sten", [])
    const kim = new Student(nanoid(), "Kim", "Kallstrom", [])
    const stina = new Student(nanoid(), "Stina", "Turner", [])

    const boris = new Teacher(nanoid(), "Boris", "Einstein", [])
    const linda = new Teacher(nanoid(), "Linda", "Smith", [])
    const mia = new Teacher(nanoid(), "Mia", "Jonson", [])

    const math = new Course(nanoid(), "math", [], boris)
    const english = new Course(nanoid(), "english", [], linda)
    const swedish = new Course(nanoid(), "swedish", [], mia)
    const history = new Course(nanoid(), "history", [], boris)

    math.addStudent(mike)
    math.addStudent(jon)
    english.addStudent(clara)
    english.addStudent(stina)
    swedish.addStudent(kim)
    swedish.addStudent(stina)

    const students = [mike, jon, clara]
    const teachers = [boris, linda, mia]
    const courses = [math, english, swedish]

    const init = () => {
      const v = new View(students, courses, teachers)
      v.render()
    }

    console.log("boris", boris)
    return {
      init,
    }
  }
  controller().init()
})()
