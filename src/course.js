export default class Course{
    constructor(name, instructor, hours){
        this._name = name.toUpperCase();
        this._instructor = instructor.toUpperCase();
        this._hours = hours;
    }
    getName(){
        return this._name;

    }
    getInstructor(){
        return this._instructor;

    }
    getHours(){
        return this._hours;
    }

    

    static readFormC(){
        let inpName = document.querySelector("#nameC");
        let inpInstructor = document.querySelector("#instructor");
        let inpHours = document.querySelector("#duration");

        let name = inpName.value;
        let instructor = inpInstructor.value;
        let hours = Number(inpHours.value);

        if(name && instructor && hours){
            inpName.value = "";
            inpInstructor.value = "";
            inpHours.value = "";
            return new Course(name, instructor, hours)
        }
        return false;
    }
}