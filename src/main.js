import Course from './course.js';
import Participant from './participant.js';
import Registry from './registry.js';
import RegistryP from './registryP.js';

class App{
    constructor(){
        this._courses = new Registry();
        let btnC = document.querySelector("#btnC");
        btnC.addEventListener('click', this._addCourse);

        this._participants = new RegistryP();
        let btnP = document.querySelector("#btnP");
        btnP.addEventListener('click', this._addParticipant);

    
        
        let select = document.querySelector("#curso2");
        select.addEventListener("change", this._organizer);

        this._table = document.querySelector('#tableBody');
  

    }

    _addCourse = () => {
        let course = Course.readFormC();

        if(!course) {
            Swal.fire('Error', 'Todos los campos son requeridos', 'error');
            return;
        }

        let added = this._courses.addC(course);

        if(added == false){
            Swal.fire('Error', 'Curso ya registrado', 'error');
            return;
        }
        Swal.fire('Correcto', 'Se agrego un nuevo curso', 'success');
    }

    _addParticipant = () => {
        let participant = Participant.readFormP();

        if(!participant) {
            Swal.fire('Error', 'Todos los campos son requeridos', 'error');
            return;
        }

        let added = this._participants.addP(participant);

        if(added == false){
            Swal.fire('Error', 'Participante ya registrado', 'error');
            return;
        }

        Swal.fire('Correcto', 'Se agrego un nuevo participnte', 'success');
       
    }


    _organizer = () =>{
        let courseName = document.getElementById("curso2").value;
        let course = this._courses.findByName(courseName);
        

        if(!course) {
            alert(`El curso ${courseName} no existe`);
            return false;
        }

        document.getElementById("instructorInfo").innerHTML = "Su instructor es: " + course.getInstructor();
        document.getElementById("horasInfo").innerHTML = "Las horas del curso son: " + course.getHours();

        let participants = this._participants.findParticipants(courseName);
       

        this._table.innerHTML = "";

        for(let i = 0; i< participants.length; i++) {
            let participant = participants[i];
            let row = this._table.insertRow(-1);

                let colId = row.insertCell(0);
                let colName = row.insertCell(1);
                let colAge = row.insertCell(2);

            row.setAttribute('id', `row`);

            colId.setAttribute('id', `colId${participant.getId()}`);
            colName.setAttribute('id', `colName${participant.getId()}`);
            colAge.setAttribute('id', `colAge${participant.getId()}`);

            colId.innerHTML = participant.getId();
            colName.innerHTML = participant.getName();
            colAge.innerHTML = participant.getAge();
        }
        return;
    }

}
new App();

