import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
/**
 * @title Basic cards
 */
@Component({
  selector: 'app-state-of-room',
  templateUrl: './state-of-room.component.html',
  styleUrls: ['./state-of-room.component.scss']
})
export class StateOfRoomComponent implements OnInit {

  humidity: any | undefined;
  temperature: any | undefined;
  quantityCO: any | undefined;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any>('https://ecosystem-smart-home.herokuapp.com/RoomСondition').subscribe(data => {
      this.temperature = data.temperature;
      this.humidity = data.humidity;
    })
  }
}
