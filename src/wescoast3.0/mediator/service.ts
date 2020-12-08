import { AdminMediator } from "./main"

class Service {
  name: string
  adminMediator: AdminMediator | null

  constructor(name: string) {
    this.name = name
    this.adminMediator = null
  }

  send(message: string) {
    this.adminMediator?.send(message, this)
  }
}

export { Service }
