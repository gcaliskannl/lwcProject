import { LightningElement } from 'lwc';

export default class ExpressionPractice extends LightningElement {
    firstName="";
    lastName="";
    batchNo="";
    phone="";

    handlerchange(event){
        const field=event.target.name;
        if(field==='fname'){
            this.firstName=event.target.value;
        }
        if(field==='lname'){
            this.lastName=event.target.value;
        }
        if(field==='batchno'){
            this.batchNo=event.target.value;
        }
        if(field==='phone'){
            this.phone=event.target.value;
        }
    }
    get upperCaseFullName(){
        return (this.firstName.toUpperCase()) +' '+ (this.lastName.toUpperCase());
    }
}