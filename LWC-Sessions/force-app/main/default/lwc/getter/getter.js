import { LightningElement } from 'lwc';

export default class Getter extends LightningElement {
     number1 = 10;
     number2 = 2;
     nameList = ["Ali", "Ela", "Ayse", "Hale", "Jale"];
     indexNo;
     get toplama(){
        return this.number1 + this.number2;
     }
     get cikarma(){
        return this.number1 - this.number2;
     }
     get carpma(){
        return this.number1 * this.number2;
     }
     get bolme(){
        return this.number1 / this.number2;
     }
     handleBlur(event){
        this.indexNo = event.target.value;
     }
     get getElement(){
        if(this.indexNo < 0 || this.indexNo >= this.nameList.length){
            alert('lutfen gecerli bir deger giriniz');
        }else{
            return this.nameList[this.indexNo];
        }
     }
    }