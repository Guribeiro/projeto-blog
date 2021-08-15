const rewire = require("rewire")
const fireabase = rewire("./fireabase")
const Firebase = fireabase.__get__("Firebase")
// @ponicode
describe("handleLogin", () => {
    let inst

    beforeEach(() => {
        inst = new Firebase()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleLogin("email@Google.com", "!Lov3MyPianoPony")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleLogin("TestUpperCase@Example.com", "$p3onyycat")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleLogin("bed-free@tutanota.de", "1Ki77y")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleLogin("bed-free@tutanota.de", ".Matrix53")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleLogin("user@host:300", ".Matrix53")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleLogin(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isLogged", () => {
    let inst

    beforeEach(() => {
        inst = new Firebase()
    })

    test("0", () => {
        let callFunction = () => {
            inst.isLogged()
        }
    
        expect(callFunction).not.toThrow()
    })
})
