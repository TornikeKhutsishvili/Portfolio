import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private http:HttpClient) { }
  arrRand:any[] = []
  ngOnInit(): void {
    this.http.get<any>("https://rickandmortyapi.com/api/character")
    .subscribe((el:any) =>{
      for(let i=0; i<3; i++){
        this.arrRand.push(el.results[Math.floor(Math.random() * el.results.length)])
      }
    })
  }
}
