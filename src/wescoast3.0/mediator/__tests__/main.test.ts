import * as adminMediator from "../main"
import { Service } from "../service"

describe("mediator", () => {
  test("mediator should work as expected ", () => {
    const mediator = new adminMediator.AdminMediator()
    const sendSpy = jest.spyOn(mediator, "send")
    const registerSpy = jest.spyOn(mediator, "register")
    const message = "message"

    const bob = new Service("bob")
    expect(mediator.collection).toEqual({})

    mediator.register(bob)
    expect(registerSpy).toHaveBeenCalledWith(bob)

    expect(mediator.messages.length).toBe(0)
    mediator.send(message, bob.name)

    expect(sendSpy).toHaveBeenCalledWith(message, bob.name)
    expect(mediator.messages.length).toBe(1)

    expect(mediator.collection[bob.name].name).toBe(bob.name)
    expect(mediator.messages[0]["message"]).toBe(message)
    expect(mediator.messages[0]["from"]).toBe(bob.name)
  })
})
