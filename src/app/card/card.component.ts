import { DatashareService } from './../datashare.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private http:HttpClient, private alertData:DatashareService) { }

  arr:any[] = []
  arr2:any[] = []

  genderSel:string=""
  Genders(){
    if(this.genderSel === "All"){
      this.arr2 = this.arr
    }
    let gendersarr = this.arr.filter(i=> i.gender.includes(this.genderSel))
    this.arr2 = gendersarr
  }

  information:string=""
  inpt(){
    let filterarr = this.arr.filter(i=> i.name.toLowerCase().includes(this.information))
    this.arr2 = filterarr
  }

  ngOnInit(): void {
    this.http.get<any>("https://rickandmortyapi.com/api/character")
    .subscribe((el:any) =>{
      for(let i of el.results){
        this.arr.push(i)
      }
      this.arr2 = ([] as any[]).concat(this.arr)
    })
  }

  AltersChild(e:any) {
    this.alertData.addAlter(this.arr2[e]);
  }
}
