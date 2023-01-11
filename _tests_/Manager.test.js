const Manager = require("../src/Manager");

//Tests to make sure a new manager is returning as an Object
test("Manager class is an object",()=>{
    const sampleManager = new Manager ("Jane", 123, "jane@email.com", "15b");

    expect(typeof sampleManager).toBe("object")
})
