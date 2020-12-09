import { AdminMediator } from "../mediator/main"
import { Service } from "../mediator/service"
import { Person } from "../types"

const adminView = (parentElement: HTMLDivElement, adminMediator: AdminMediator, admin: Person) => {
  const adminService = new Service(admin.firstName)

  let xs: Record<string, Record<string, any>>[] = []

  const getAdminMessages = () => {
    xs = adminMediator.messages

    return xs
  }

  const render = () => {
    const html = `
      <div class="admin-wrapper wrapper-${adminService.name}">
      <button id="admin-profile-btn" class="button">Info</button>
      <div class="admin-content">
        <h3> Mr Admin ${adminService.name}</h3>
        <p>${adminService.name}</p>
        <ul class="admin-messages-list">
          ${
            xs.length > 0
              ? xs.map(x => ` <li>${x.message}</li> `).join("")
              : `<p>No registered students YET!</p>`
          }
        </ul>
        </div>

    </div>
      `

    parentElement.innerHTML = html
    getAdminMessages()

    const btn = document.getElementById("admin-profile-btn")

    btn?.addEventListener("click", () => {
      getAdminMessages()
      init()
    })
  }

  const init = () => {
    render()
  }

  return {
    init,
  }
}

export { adminView }
