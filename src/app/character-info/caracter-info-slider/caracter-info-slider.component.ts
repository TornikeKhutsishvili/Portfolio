import { DatashareService } from './../../datashare.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caracter-info-slider',
  templateUrl: './caracter-info-slider.component.html',
  styleUrls: ['./caracter-info-slider.component.css']
})
export class CaracterInfoSliderComponent implements OnInit {

  constructor(private http:HttpClient, private alerts:DatashareService) { }
  alterslider:any[] = []
  ngOnInit(): void {
    this.http.get(`https://rickandmortyapi.com/api/character/?name=${this.alerts.getAlter()[this.alerts.getAlter().length - 1].name.split(" ")[0].toLowerCase()}&status=alive`)
    .subscribe((el:any)=> {
      for(let i = 0; i < 3; i++) {
          this.alterslider.push(el.results[Math.floor(Math.random() * el.results.length)]);
      }
    })
  }
}
