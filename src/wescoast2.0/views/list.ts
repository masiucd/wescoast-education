import { Course } from "../../westcoast/data/Course"
import { Teacher } from "../../westcoast/data/Teacher"
import { DisplayData, DisplayDataItem } from "../types"

export class ListView {
  rootElement: HTMLDivElement
  displayData: DisplayData
  mainTitle: string
  titles: string[]
  constructor(rootElement: unknown, displayData: DisplayData, mainTitle: string, titles: string[]) {
    this.rootElement = rootElement as HTMLDivElement
    this.displayData = displayData
    this.mainTitle = mainTitle
    this.titles = titles
  }

  // TODO: Change this type
  handleClick(subscriber: Function) {
    //TODO
    // Logic
  }

  render(): void {
    const html = `
      <table class="list-wrapper">
        <thead>
          ${this.titles.map(t => `<th>${t}</th>`).join("")}
        </thead>
          <tbody class="list list-${this.mainTitle}">
              
              
          </tbody>
      </table>
    `
    this.rootElement.insertAdjacentHTML("beforeend", html)
  }
}
// ${this.displayData.map((d: DisplayDataItem) => `${d.id}`)}
