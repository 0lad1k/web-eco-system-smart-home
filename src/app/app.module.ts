import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarHederComponent } from './toolbar-heder/toolbar-heder.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RecomendationsPageComponent } from './recomendations-page/recomendations-page.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { StateOfRoomComponent } from './state-of-room/state-of-room.component';
import {MatCardModule} from "@angular/material/card";

const appRoutes: Routes =[
  { path: 'recomendations', component: RecomendationsPageComponent},
  {path: 'state-of-room', component: StateOfRoomComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarHederComponent,
    RecomendationsPageComponent,
    StateOfRoomComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'recomendations', component: RecomendationsPageComponent},
      {path: 'state-of-room', component: StateOfRoomComponent}
    ]),
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
