const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email)
      this.officeNumber = officeNumber;
      this.role = "Manager"
    }
    getOfficeNumber(){
        return this.getOfficeNumber
    }
}

    module.exports = Manager;