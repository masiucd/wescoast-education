const listView = <T>(parentElement: HTMLDivElement, xs: T[], title: string, subTitles: string[]) => {
  const rawHtml = () =>
    `   
    <div class="table-wrapper wrapper-${title}">
    <table class="${title}">
        <caption>${title}</caption>
        <thead>
          ${subTitles.map(t => `<th>${t}</th>`).join("")}
        </thead>
        <tbody>
          ${xs
            .map((data: any) => {
              const showCase = data.showCase()
              return `
                <tr data-id="${data.id}" id="${
                data.type === "s"
                  ? `student-${data.id}`
                  : data.type === "t"
                  ? `teacher-${data.id}`
                  : `course-${data.id}`
              }">
                ${Object.keys(showCase)
                  .map(key => `<td data-info="${showCase[key]}">${showCase[key]}</td>`)
                  .join("")}
                </tr>
          `
            })
            .join("")}
        </tbody>
      </table>
    </div>
    `

  const render = () => {
    parentElement.innerHTML = rawHtml()
  }

  const onClick = (handler: Function) => {
    const trs = document.querySelectorAll("tr")
    trs.forEach(tr =>
      tr.addEventListener("click", () => {
        const [type] = tr.id.split("-")
        if (type === "student") {
          handler(parseInt(tr.dataset.id!, 10))
        }
        // sessionStorage.setItem("user", String(tr.dataset.id))
      })
    )
  }

  const init = () => {
    render()
  }

  return {
    init,
    rawHtml,
    onClick,
  }
}

export { listView }
