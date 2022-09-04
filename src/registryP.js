export default class RegistryP {
    constructor(){
        this._registryP = new Array();
    }

    addP(participant){
        let pos = this._findP(participant);

        if(pos >= 0){
            return false;
        }

        
        this._registryP.push(participant);
        console.log(this._registryP);
        return true;
    }

    _findP(participant){
        let pos = this._registryP.findIndex((p) => {
            if(p.getId() === participant.getId()){
                return true;
            }

            return false;
        });

        return pos;
    }

    findParticipants(courseName) {
        let participants = new Array();
        for(let i = 0;i < this._registryP.length; i++){
            console.log(this._registryP[i].getCourse());
        
            if(courseName === this._registryP[i].getCourse()){
                participants.push(this._registryP[i]);

            }
            
        }
        
        return participants;
    }
}