import { nanoid } from "nanoid"
import { Subject } from "../../westcoast/data/Types"

export class Course {
  id: string
  title: Subject
  about: string
  duration: string
  constructor(id: string, title: Subject, about: string, duration: string) {
    this.id = id
    this.title = title
    this.about = about
    this.duration = duration
  }

  get CourseInfo() {
    return {
      courseTitle: this.title,
      courseDesc: this.about,
      courseLength: this.duration,
    }
  }
}

export default [
  new Course(nanoid(), "math", "math is wonderful", "6h"),
  new Course(nanoid(), "history", "history is good for you", "3h"),
  new Course(nanoid(), "swedish", "without swedish you will face some serious problems", "2h"),
  new Course(nanoid(), "english", "the global language, learn it NOW!!!", "5h"),
]
