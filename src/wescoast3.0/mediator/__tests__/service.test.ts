import * as service from "../service"

describe("service", () => {
  test("service should work as expected ", () => {
    const name = "mia"
    const miaService = new service.Service(name)

    const message = "Hello"
    expect(miaService.name).toBe(name)
    expect(miaService.adminMediator).toBe(null)

    jest.spyOn(miaService, "send")
    miaService.send(message)

    expect(miaService.send).toHaveBeenCalledTimes(1)
    expect(miaService.send).toHaveBeenCalledWith(message)
  })

  // Ignore this test
  // I just wanted to test a private method and see how to implement one
  test("spy on private methods", () => {
    const name = "mia"
    const s = new service.Service(name)
    const privateSpy = jest.spyOn(service.Service.prototype as any, "add")

    const num1 = 20
    const num2 = 10
    const expectedResult = 30

    const res = s.doSomeMath(num1, num2)
    expect(res).toBe(expectedResult)

    expect(privateSpy).toHaveBeenCalledTimes(1)
    expect(privateSpy).toHaveBeenCalledWith(num1, num2)
  })
})
