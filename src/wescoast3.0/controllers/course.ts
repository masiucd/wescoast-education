import { courses } from "../models/course"
import { listView } from "../views/list-view"

const courseController = (parentElement: HTMLDivElement) => {
  const view = listView(parentElement, courses, "courses", ["title", "duration"])

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

export { courseController }
