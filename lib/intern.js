const Employee = require('./employee');

class Intern extends Employee (){

    constructor(school){
        this.school = school; 

    }
    
    getSchool(){

    }

    getrole(){

        return //Overriden to Intern; 
    }

}