import { Course } from "../../westcoast/data/Course"
import { Teacher } from "../../westcoast/data/Teacher"
import { DisplayData, DisplayDataItem } from "../types"

export class ListView {
  rootElement: HTMLDivElement
  displayData: Array<any>
  mainTitle: string
  titles: string[]
  constructor(rootElement: unknown, displayData: Array<any>, mainTitle: string, titles: string[]) {
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
    <div class="list-wrapper">
      <table>
          <thead>
          ${this.titles.map(t => `<th>${t}</th>`).join("")}
          </thead>
          <tbody class="list list-${this.mainTitle}">
              ${(this.displayData as Array<Course | Teacher>)
                .map(d => {
                  // @ts-ignore
                  const showCase = d.showCase()
                  return `
                <tr>
                  ${Object.keys(showCase)
                    .map(key => `<td>${showCase[key]}</td>`)
                    .join("")}
                  
                </tr>`
                })
                .join("")}
          </tbody>
      </table>
    </div>
    `
    this.rootElement.insertAdjacentHTML("beforeend", html)
  }
}
