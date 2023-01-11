const Engineer = require("../src/Engineer");

//Tests to make sure a new engineer is returning as an Object
test("Engineer class is an object",()=>{
    const sampleEngineer = new Engineer ("Max", 456, "max@email.com", "github63");

    expect(typeof sampleEngineer).toBe("object")
})
