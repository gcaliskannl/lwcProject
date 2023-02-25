import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    isim = 'Ali';
    soyisim = 'Ozturk';
    ulke = 'Turkiye';
    handleInput(event){
        this.isim = event.target.value;
    }
    handleChange(event){
        this.soyisim = event.target.value;
    }
    handleBlur(event){
        this.ulke = event.target.value;
    }
}