import { Subject } from "../types"

const course = (id: number, title: Subject, about: string, duration: string) => {
  const showCase = () => {
    return {
      title,
      duration,
    }
  }

  return {
    id,
    title,
    about,
    duration,
    showCase,
  }
}

type CourseType = typeof course

const courses = [
  course(1, "french", "french class", "5h"),
  course(2, "history", "history class", "3h"),
  course(3, "math", "math class", "4h"),
  course(4, "english", "english class", "3h"),
]

export { course, courses, CourseType }
