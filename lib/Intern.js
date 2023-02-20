const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, schoolName, role) {
        super(name, id, email)
      this.schoolName = schoolName;
      this.role = "Intern"
    }
    getschoolName(){
        return this.getschoolName
    }
}

    module.exports = Intern;