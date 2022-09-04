export default class Participant {
    constructor(id, name, course, date){
        this._id = id;
        this._name = name.toUpperCase();
        this._course = course;
        this._date = new Date(date);
    }

    getId(){
        return this._id;
    }

    getName(){
        return this._name;
    }

    getCourse(){
        return this._course;
    }

    getDate(){
        return this._date;
    }

    getAge() {
        let fecha = this._date;
        let today = new Date(); 
        let diff = today.getTime() - fecha.getTime();
        let dateDiff = new Date(diff);
        let age = dateDiff.getUTCFullYear() - 1970;

        return age;
    }

    static readFormP(){
        let inpId = document.querySelector("#id");
        let inpName = document.querySelector("#nameP");
        let inpCourse = document.querySelector("#curso");
        let inpDate = document.querySelector("#birthDate");

        let id = inpId.value;
        let name = inpName.value;
        let course = inpCourse.value;
        let date = inpDate.value;

        if(id && name && date && course){
            inpId.value = "";
            inpName.value = "";
            inpCourse.value = "";
            inpDate.value = "";
            return new Participant(id, name, course, date);
        }
        return false;
    }
}
