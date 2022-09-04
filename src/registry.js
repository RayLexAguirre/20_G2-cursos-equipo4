export default class Registry {
    constructor(){
        this._registryC = new Array();
    }

    addC(course){
        let pos = this._findC(course);

        if(pos >= 0){
            return false;
        }
        this._registryC.push(course);
        console.log(this._registryC);
        this._addSelect(course);
        return true;
    }


    _findC(course){
        let pos = this._registryC.findIndex((p) => {
            if(p.getName() === course.getName() && p.getInstructor() === course.getInstructor() && p.getHours() === course.getHours()){
                return true;
            }

            return false;
        });

        return pos;
    }

    findByName(name) {
        let pos = this._registryC.findIndex((course) => {
            if(course.getName() === name) {
                return true;
            }

            return false;
        });

        if(pos < 0) {
            return null;
        }

        return this._registryC[pos];
    }

    _addSelect(course){
        let select = document.querySelector("#curso");
        let cur = document.createElement('option');
        cur.value = course.getName();
        cur.text = course.getName();
        console.log(cur);
        select.add(cur);

        let select2 = document.querySelector("#curso2");
        let cur2 = document.createElement('option');
        cur2.value = course.getName();
        cur2.text = course.getName();
        console.log(cur2);
        select2.add(cur2);
    }
    

}