import { admin as adminCreator } from "../models/admin"
import { adminMediator } from "../mediator/main"
import { adminView } from "../views/admin-view"

const adminController = (parentElement: HTMLDivElement) => {
  const view = adminView(
    parentElement,
    adminMediator,
    adminCreator({
      id: 204,
      firstName: "Bruce",
      lastName: "Wayne",
      age: 45,
      email: "batman@io.com",
      type: "a",
    }),
  )

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

export { adminController }
