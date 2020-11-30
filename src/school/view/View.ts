import { Student } from "../data/Student"
import { Course } from "../data/Course"
import { Teacher } from "../data/Teacher"

export class View {
  main: HTMLDivElement
  wrapper: HTMLDivElement
  title: HTMLHeadElement

  showDataButton: HTMLButtonElement
  students: Student[]
  courses: Course[]
  teachers: Teacher[]
  studentList: HTMLUListElement
  teachersList: HTMLUListElement
  coursesList: HTMLUListElement

  constructor(students: Student[], courses: Course[], teachers: Teacher[]) {
    this.students = students
    this.courses = courses
    this.teachers = teachers

    this.main = this.getElement("#root") as HTMLDivElement
    this.wrapper = this.createElement("div", "wrapper") as HTMLDivElement

    this.title = this.createElement("h1", "main-title") as HTMLHeadElement
    this.title.textContent = "WesCoast"

    this.showDataButton = this.createElement("button", "show-data-btn") as HTMLButtonElement
    this.showDataButton.textContent = "show data"

    this.coursesList = this.createElement("ul", "courses-list") as HTMLUListElement
    this.studentList = this.createElement("ul", "students-list") as HTMLUListElement
    this.teachersList = this.createElement("ul", "teachers-list") as HTMLUListElement
    this.coursesList.classList.add("hide")
    this.teachersList.classList.add("hide")
    this.studentList.classList.add("hide")

    this.wrapper.append(
      this.title,
      this.showDataButton,
      this.coursesList,
      this.studentList,
      this.teachersList
    )

    this.main.append(this.wrapper)
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

  private renderStudents(): string {
    return this.students
      .map(
        student =>
          `
        <li class="student">${student.firstName}-${student.lastName}</li>
        <p>${student.firstName} currently study:</p>
        ${student.courses.map((course: Course) => `<li>${course.subject}</li>`).join("")}
      `
      )
      .join("")
  }
  private renderTeachers(): string {
    return this.teachers
      .map(
        teacher =>
          `
        <li class="teacher">${teacher.firstName}-${teacher.lastName}</li>
        <p>${teacher.firstName} main subjects:</p>
        ${teacher.subjects.map(subject => `<li class="subject">${subject}</li> `).join("")}
      `
      )
      .join("")
  }
  private renderCourses(): string {
    return this.courses
      .map(
        course =>
          `
        <li class="course">${course.subject}</li>
        <p>Students that read ${course.subject}</p>
        ${course.students
          .map((student: Student) => `<li>${student.firstName}- ${student.lastName} </li>`)
          .join("")}
      `
      )
      .join("")
  }

  render() {
    this.studentList.innerHTML = `
      <li class="title"> <strong> Student List </strong> </li>
      ${this.renderStudents()}
    `

    this.teachersList.innerHTML = `
    <li class="title"> <strong>Teachers List</strong> </li>
      ${this.renderTeachers()}
    `
    this.coursesList.innerHTML = `
    <li class="title"> <strong>Courses List</strong> </li>
      ${this.renderCourses()}
    `
    this.showDataButton.addEventListener("click", () => {
      this.studentList.classList.toggle("show")
      this.coursesList.classList.toggle("show")
      this.teachersList.classList.toggle("show")
    })

    this.coursesList.firstElementChild?.addEventListener("click", () => {
      const modal = this.getElement(".modal") as HTMLDivElement
      modal.classList.add("show-modal")
      console.log("w")

      modal.innerHTML = `
        <div class="modal-body">
          <h1>Hello there</h1> 
        </div>
      `
    })

    document.querySelectorAll(".course").forEach(course => {
      course.addEventListener("click", e => {
        console.log("course")
      })
    })
  }
}
