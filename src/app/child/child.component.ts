import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private http:HttpClient, private alerts:DatashareService) { }
  arr:any[] = []
  arr2:any[] = []
  ngOnInit(): void {
    this.http.get<any>("https://rickandmortyapi.com/api/character")
    .subscribe((el:any) =>{
      for(let i of el.results){
        this.arr.push(i)
      }
      this.arr2 = ([] as any[]).concat(this.arr)
    })
  }

  child(e:any) {
    this.alerts.addAlter(this.arr2[e]);
  }
}
