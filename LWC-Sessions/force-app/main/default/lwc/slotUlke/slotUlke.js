import { LightningElement } from 'lwc';

export default class SlotUlke extends LightningElement {
    country;
    city;
    famousFor;
    handleChange(event){
        const field = event.target.name;
        if (field === "country"){
            this.country=event.target.value;
        }
        if (field === "city"){
            this.city=event.target.value;
        }
        if (field === "famousFor"){
            this.famousFor=event.target.value;
        }
    }
}