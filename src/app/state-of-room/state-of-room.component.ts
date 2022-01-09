import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { formatDate } from '@angular/common';
export interface roomInfoData {
  id: number,
  humidity: number,
  temperature: number,
  dateLastCheckState:string
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
  roomst : roomInfoData[] |  undefined;
  PieChart: any;
  data: any;
  options: any;
  title: any;
  type: any;
  columnNames: any;
  width: any;
  height: any;
  constructor(private http: HttpClient) {
    this.PieChart = "PieChart"
    this.options = {
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
    };
    this.title ="Температура в кімнаті";
    this.type ='ColumnChart';
    this.columnNames = ['Date', 'Temperature'];
    this.width = 500;
    this.height = 500;
  }

  ngOnInit() {
    this.http.get<any>('https://ecosystem-smart-home.herokuapp.com/Room%D0%A1ondition/GetRoomState').subscribe(data => {
      this.roomInfo = data;
    })

    this.http.get<any>('https://ecosystem-smart-home.herokuapp.com/Room%D0%A1ondition/GetRoomStatistic').subscribe(data => {
      this.roomst = data;
      // @ts-ignore
      this.data = data.map(d =>
        ([  formatDate(d.dateLastCheckState, 'dd/MM/yyyy, HH:mm:ss', "en-US"), d.temperature])
      );
      console.log(this.data );
      console.log(data);

    })
  }
}
