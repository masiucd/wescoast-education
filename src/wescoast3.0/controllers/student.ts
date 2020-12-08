import { courses } from "../models/course"
import { students } from "../models/students"
import { Person } from "../types"
import { listView } from "../views/list-view"
import { modalView } from "../views/modal-view"

const studentController = (parentElement: HTMLDivElement) => {
  const view = listView(parentElement, students, "students", ["name", "email", "age"])

  const render = () => {
    view.init()
  }

  const getStudent = (id: number) => {
    const student = students.find(student => student.id === id) as Person
    const modal = document.querySelector(".modal") as HTMLDivElement
    modalView(modal, student, courses, "courses", ["title", "duration"]).init()
  }

  const handleClick = () => {
    view.onClick(getStudent)
  }

  const init = () => {
    render()
    handleClick()
  }

  return {
    init,
  }
}

export { studentController }
