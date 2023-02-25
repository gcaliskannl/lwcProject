import { LightningElement } from 'lwc';

export default class GetterPractice extends LightningElement {
    sayi1 = 3;
    sayi2 = 5;
    handleSayi1(event){
        this.sayi1 = event.target.value;
    }
    handleSayi2(event){
        this.sayi2 = event.target.value;
    }
    get Toplam(){
        return parseInt(this.sayi1)+parseInt(this.sayi2);
    }
}