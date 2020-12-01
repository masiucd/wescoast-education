import { Student } from "./models/student"
import { Teacher } from "./models/teacher"
import { Course } from "./models/course"

export type Subject = "english" | "math" | "history" | "swedish"

export type DisplayData = Course[] | Teacher[] | Student[]
export type DisplayDataItem = Course | Teacher | Student
