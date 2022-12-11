import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodeNum !:number;
  charactersArr:any[] = [];

  constructor(private http:HttpClient, private alt:DatashareService) { }

  ngOnInit(): void {
  }

  getEpisode() {
    this.charactersArr = [];
    this.http.get(`https://rickandmortyapi.com/api/episode/${this.episodeNum}`).subscribe((data:any)=> {
      data.characters.forEach((el:any)=> {
        this.http.get(el).subscribe((data:any)=> {
          this.charactersArr.push(data)
        })
      })
    })
  }

  showAlters(data:any) {
    this.alt.addAlter(this.charactersArr[data]);
  }
}
