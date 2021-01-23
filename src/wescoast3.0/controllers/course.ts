import { courses } from "../models/course"
import { listView } from "../views/list-view"

function courseController(parentElement: HTMLDivElement) {
  const view = listView(parentElement, courses, "courses", ["title", "duration"])

  function render() {
    view.init()
  }

  function init() {
    render()
  }

  return {
    init,
  }
}

export { courseController }
