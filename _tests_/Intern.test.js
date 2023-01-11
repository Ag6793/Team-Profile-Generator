const Intern = require("../src/Intern");

//Tests to make sure a new intern is returning as an Object
test("Intern class is an object",()=>{
    const sampleIntern = new Intern ("Jane", 432, "jane@email.com", "txuniversity");

    expect(typeof sampleIntern).toBe("object")
})
