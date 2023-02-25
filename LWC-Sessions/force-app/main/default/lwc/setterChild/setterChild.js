import { api, LightningElement } from 'lwc';

export default class SetterChild extends LightningElement {
    upperCaseName = 'baslangic degeri';
@api
    get itemName(){
        return this.upperCaseName;
    }
    set itemName(value){
        this.upperCaseName = value.toUpperCase();
    }
}