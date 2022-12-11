import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { SectionComponent } from './section/section.component';
import { SliderComponent } from './slider/slider.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { CaracterInfoSliderComponent } from './character-info/caracter-info-slider/caracter-info-slider.component';
import { EpisodesComponent } from './episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CardComponent,
    CharacterInfoComponent,
    SectionComponent,
    SliderComponent,
    NavigationComponent,
    ChildComponent,
    CaracterInfoSliderComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
