const Employee = require("../src/Employee");

//Tests to make sure a new employee is returning as an Object
test("Employee class is an object",()=>{
    const sampleEmployee = new Employee ("John", 143, "John@email.com");

    expect(typeof sampleEmployee).toBe("object")
})

