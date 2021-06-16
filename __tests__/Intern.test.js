const Intern = require("../lib/intern");
describe("Intern", ()=>{
  it("Can set school via constructor", () => {
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.special).toBe(testValue);
  });

  it("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "UCLA");
    expect(e.getRole()).toBe(testValue);
  });

  it("Can get school via getSchool()", () => {
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });
});