import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
export interface roomInfoData {
  id: number,
  humidity: number,
  temperature: number,
  dateLastCheckState:string
  luminosity: number,
  pressure: number,
}

/**
 * @title Basic cards
 */
@Component({
  selector: 'app-state-of-room',
  templateUrl: './state-of-room.component.html',
  styleUrls: ['./state-of-room.component.scss']
})

export class StateOfRoomComponent implements OnInit {
  roomInfo: roomInfoData| undefined;
  GetRoomStatisticByCurrentMonth: string;
  GetRoomStatisticByWeek: string;
  constructor(private http: HttpClient) {
    this.GetRoomStatisticByCurrentMonth = "GetRoomStatisticByCurrentMonth";
    this.GetRoomStatisticByWeek = "GetRoomStatisticByWeek"
  }

  ngOnInit() {
    this.http.get<roomInfoData>('https://ecosystem-smart-home.herokuapp.com/Room%D0%A1ondition/GetRoomState')
      .subscribe(data => {
      this.roomInfo = data;
    })}
}
