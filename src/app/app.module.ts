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
import {GoogleChartsModule} from "angular-google-charts";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RoomStateChartComponent } from './state-of-room/room-state-chart/room-state-chart.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoutes: Routes =[
  { path: 'recomendations', component: RecomendationsPageComponent},
  {path: 'state-of-room', component: StateOfRoomComponent},
  {path: '', component: AboutUsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarHederComponent,
    RecomendationsPageComponent,
    StateOfRoomComponent,
    RoomStateChartComponent,
    FooterComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GoogleChartsModule,
    MatToolbarModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'recomendations', component: RecomendationsPageComponent},
      {path: 'state-of-room', component: StateOfRoomComponent},
      {path: '', component: AboutUsComponent}
    ]),
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
