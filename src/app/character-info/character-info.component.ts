import { DatashareService } from './../datashare.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  constructor(private http:HttpClient, private alerts:DatashareService) { }

  Allalters:any[] = []
  Allalters_arr:any[] = []

  ngOnInit(): void {
    this.http.get(`https://rickandmortyapi.com/api/character/?name=${this.alerts.getAlter()[this.alerts.getAlter().length - 1].name.split(" ")[0].toLowerCase()}&status=alive`)
    .subscribe((el:any)=> {
      this.Allalters = [...el.results];
      for(const i of this.Allalters){
        this.Allalters_arr.push(i)
      }
    })
    this.http.get(`https://rickandmortyapi.com/api/character/?name=${this.alerts.getAlter()[this.alerts.getAlter().length - 1].name.split(" ")[0].toLowerCase()}&status=dead`)
    .subscribe((el:any)=> {
      this.Allalters = [...el.results];
      for(const i of this.Allalters){
        this.Allalters_arr.push(i)
      }
    })
    this.http.get(`https://rickandmortyapi.com/api/character/?name=${this.alerts.getAlter()[this.alerts.getAlter().length - 1].name.split(" ")[0].toLowerCase()}&status=unknown`)
    .subscribe((el:any)=> {
      this.Allalters = [...el.results];
      for(const i of this.Allalters){
        this.Allalters_arr.push(i)
      }
    })
  }

  child(e:any) {
    this.alerts.addAlter(this.Allalters_arr[e]);
  }
}
