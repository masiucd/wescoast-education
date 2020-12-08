import { adminMediator } from "../mediator/main"
import { Service } from "../mediator/service"
import { Person, Subject } from "../types"
import { listView } from "./list-view"

export interface Listener<T> {
  event: { target: T }
}

const modalView = <T>(
  parentElement: HTMLDivElement,
  person: Person,
  xs: T[],
  title: string,
  subTitles: string[]
) => {
  const view = listView(parentElement, xs, title, subTitles)

  const updateAdminMediator = () => {
    console.log(adminMediator)
  }

  const render = () => {
    parentElement.classList.add("show-modal")
    const html = `
    <div class="modal-container">
      ${view.rawHtml()}
      <button class="close-modal">
        ❌
      </button>
    </div>
    `
    parentElement.innerHTML = html
    document.querySelector(".close-modal")?.addEventListener("click", () => {
      parentElement.classList.remove("show-modal")
    })
    const studentService = new Service(person.firstName)
    adminMediator.register(studentService)
    const tds = document.querySelectorAll(".modal tbody tr td") as NodeList

    Array.from(tds).forEach(td => {
      const tdElement = td as HTMLElement
      const info = tdElement.dataset.info as Subject

      if (info === "english" || info === "french" || info === "history" || info === "math") {
        td.addEventListener("click", (event: any) => {
          studentService.send(
            `Student ${person.firstName} ${person.lastName} has been registered for the course ${info}`
          )

          updateAdminMediator()
          // if ("send" in this.data) {
          //   const confirmationText = `You have now been registered to the ${event.target.innerText} Course`
          //   this.data.send(confirmationText, this.admin) // sending from this student, to itself and to admin
          //   this.updateText(confirmationText)
          //   console.log(this.admin.adminMediator?.members)
          //   this.updateHtml()
          // }
        })
      }
    })
  }

  const init = () => {
    render()
  }

  return {
    init,
  }
}

export { modalView }
