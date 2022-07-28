//solution 1
let employee: {code: number, name: string} = {
    code: 10,
    name: "John"
    }
    
    //solution 2
    interface IEmployee {
        code: number,
        name: string
    }
    
    let employee2: IEmployee = {
        code: 10,
        name: "John"
    }