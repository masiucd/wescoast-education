import { teachers } from "../models/teacher"
import { listView } from "../views/list-view"

const teacherController = (parentElement: HTMLDivElement) => {
  const view = listView(parentElement, teachers, "teachers", ["name", "email", "age"])

  const render = () => {
    view.init()
  }

  const init = () => {
    render()
  }
  return {
    init,
  }
}

export { teacherController }
