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

  // This is just for testing purpose
  // How to test private methods
  private add(a: number, b: number) {
    return a + b
  }

  doSomeMath(a: number, b: number) {
    return this.add(a, b)
  }
}

export { Service }
