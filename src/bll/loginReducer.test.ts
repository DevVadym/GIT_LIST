import loginReducer, { setData } from "./loginReducer"

test("status must be finished",()=>{
    const initState = {
        name: "Vadym",
        email: "",
        status: null
    }


    let obj = {name: "Vadym"}

    let endState = loginReducer(initState, setData(obj))
    expect(endState.status).toBe(null)
    expect(endState.name).toBe("Vadym")
})