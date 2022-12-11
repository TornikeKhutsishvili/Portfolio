import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { ChildComponent } from './child/child.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'episodes', component: EpisodesComponent},
  {path:'character-info', component: CharacterInfoComponent,children:[
    {path: 'child', component: ChildComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
