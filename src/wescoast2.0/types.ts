import { Teacher } from "../westcoast/data/Teacher"
import { Course } from "./models/course"

export type Subject = "english" | "math" | "history" | "swedish"
export type DisplayData = Course[] | Teacher[]
export type DisplayDataItem = Course | Teacher
