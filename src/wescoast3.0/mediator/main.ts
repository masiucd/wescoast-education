import { Service } from "./service"

export class AdminMediator {
  collection: Record<string, Service>
  messages: any[]
  constructor() {
    this.collection = {}
    this.messages = []
  }
  register(service: Service) {
    this.collection[service.name] = service
    service.adminMediator = this
  }

  send(message: string, from: any) {
    this.messages.push({ message, from })
  }
}

export const adminMediator = new AdminMediator()
