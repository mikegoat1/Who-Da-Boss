const Employee = require('./employee');


class Intern extends Employee {

    constructor(name, id, email, special) {
        super(name, id, email)
        this.special = special;
    }

    getSchool() {
        return this.special;
    }

    getRole() {

        return "Intern"
    }

}

module.exports = Intern;