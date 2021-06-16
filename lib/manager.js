const Employee = require('./employee');


class Manager extends Employee {
    constructor(name,id, email, special) {
        super(name,id,email)
        this.special = special;
        

    }

    getOfficeNumber(){
        return this.special; 
    }

    getRole() {

        return "Manager"
    }
}

module.exports = Manager;