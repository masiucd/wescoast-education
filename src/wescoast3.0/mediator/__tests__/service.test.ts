import * as Service from "../service"

describe("service", () => {
  test("service should work as expected ", () => {
    const name = "mia"
    const miaService = new Service.Service(name)

    const message = "Hello"
    expect(miaService.name).toBe(name)
    expect(miaService.adminMediator).toBe(null)

    jest.spyOn(miaService, "send")
    miaService.send(message)

    expect(miaService.send).toHaveBeenCalledTimes(1)
    expect(miaService.send).toHaveBeenCalledWith(message)
  })
})
