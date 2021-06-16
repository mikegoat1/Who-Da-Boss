const Employee = require('./employee');


class Engineer extends Employee{

    constructor(name, id, email, special){
        super (name, id, email)
        this.special = special; 

    }
    getGithub(){
        return this.special;
    }

    getRole(){

        return "Engineer"
    }
}

module.exports = Engineer;