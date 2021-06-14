const Employee = require('./employee');
const { getRole } = require('./manger');

class Engineer extends Employee{

    constructor(github){
        this.github = github; 

    }
    getGithub(){

    }

    getRole(){

        return //Overridden to Engineer
    }
}

module.exports = {
    Engineer,
}