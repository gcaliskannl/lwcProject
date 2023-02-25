import { LightningElement } from 'lwc';

export default class Getterfunction extends LightningElement {
    firstName = 'gokhan';
    lastName = 'tekin';
    handleName(event){
        this.firstName = event.target.value;
    }
    handlelastName(event){
        this.lastName = event.target.value;
    }
    get fullUpperCase(){
        return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`
    }
}