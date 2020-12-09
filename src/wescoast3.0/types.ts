export interface Person {
  id: number
  firstName: string
  lastName: string
  email: string
  age: number
  type: "t" | "s" | "a"
  showCase?: () => Record<string, any>
}

export type Subject = "math" | "history" | "english" | "french"
