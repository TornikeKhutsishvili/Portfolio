import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }

  altersSlider:any = [];

  addAlter(alter_sl:any){
    this.altersSlider.push(alter_sl);
  }

  getAlter() {
    return this.altersSlider;
  }
}
