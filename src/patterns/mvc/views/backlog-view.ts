import { BacklogItem } from "../models/backlog-model"

export class BacklogView {
  app: HTMLDivElement
  wrapper: HTMLDivElement
  title: HTMLHeadElement
  form: HTMLFormElement
  input: HTMLInputElement
  submitButton: HTMLButtonElement
  backLogList: HTMLUListElement

  constructor() {
    // root
    this.app = this.getElement("#root") as HTMLDivElement
    this.wrapper = this.createElement("div", "wrapper") as HTMLDivElement

    this.title = this.createElement("h1", "main-title") as HTMLHeadElement
    this.title.textContent = "BackLogList List"

    this.form = this.createElement("form", "backlog-form") as HTMLFormElement

    this.input = this.createElement("input", "add-input") as HTMLInputElement
    this.input.type = "text"
    this.input.placeholder = "enter a new backlog to the backlog..."

    this.submitButton = this.createElement(
      "button",
      "add-btn"
    ) as HTMLButtonElement
    this.submitButton.innerText = "submit"

    this.backLogList = this.createElement(
      "ul",
      "backlog-list"
    ) as HTMLUListElement

    this.form.append(this.input, this.submitButton)

    this.wrapper.append(this.title, this.form, this.backLogList)

    this.app.append(this.wrapper)
  }

  createElement(tag: string, className: string = "") {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
  }

  getElement(selector: string) {
    const element = document.querySelector(selector)

    return element
  }

  private get _getBacklogText() {
    return this.input.value
  }

  private _clearInput() {
    this.input.value = ""
  }

  renderBacklogItems(backlogItems: BacklogItem[]) {
    while (this.backLogList.firstChild) {
      this.backLogList.removeChild(this.backLogList.firstChild)
    }

    if (backlogItems.length === 0) {
      const p = this.createElement("p", "no-backlogs-message")
      p.innerText = "No backlogs!"
      this.backLogList.append(p)
    } else {
      backlogItems.forEach(item => {
        const li = this.createElement("li", "item") as HTMLLIElement
        li.id = String(item.id)

        const checkbox = this.createElement(
          "input",
          "toggle-box"
        ) as HTMLInputElement
        checkbox.type = "checkbox"
        checkbox.checked = item.completed

        const span = this.createElement("span", "text-for-backlog")
        span.innerText = item.task

        if (item.completed) {
          li.classList.add("checked")
        } else {
          li.classList.remove("checked")
        }

        const deleteBtn = this.createElement(
          "button",
          "remove-btn"
        ) as HTMLButtonElement
        deleteBtn.textContent = `Delete ${item.task?.slice(0, 5)}...`

        li.append(checkbox, span, deleteBtn)

        this.backLogList.append(li)
      })
    }
  }

  bindAddBacklog(handler: Function) {
    this.form.addEventListener("submit", (event: Event) => {
      event.preventDefault()
      console.log("submitted")
      handler(this._getBacklogText)
      console.log(this._getBacklogText)
      this._clearInput()
    })
  }

  bindToggleBacklog(handler: (id: number) => void) {}
  bindDeleteBacklog(handler: (id: number) => void) {}
  bindEditBacklog(
    handler: (backlogId: number, task: string, completed: boolean) => void
  ) {}
}
