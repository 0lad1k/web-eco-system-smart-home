import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { formatDate } from '@angular/common';
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
  GraphTypo: any;
  dataLuminosity: any;
  dataPressure: any;
  dataTemperature: any;
  dataHumidity : any;
  options: any;
  titleLuminosity: string;
  titlePressure: string;
  titleTemperature: string;
  titleHumidity: string;
  type: any;
  columnNames: any;
  width: any;
  height: any;
  constructor(private http: HttpClient) {
    this.GraphTypo = "PieChart"
    this.options = {
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
    };
    this.titleTemperature ="Температура в кімнаті";
    this.titleHumidity = "Вологість в кімнаті"
    this.titlePressure = "Тиск в кімнаті"
    this.titleLuminosity = "Освітленість в кімнаті в кімнаті"
    this.type ='ColumnChart';
    this.columnNames = ['Date', 'Temperature'];
    this.width = 500;
    this.height = 500;
  }

  ngOnInit() {
    this.http.get<any>('https://ecosystem-smart-home.herokuapp.com/Room%D0%A1ondition/GetRoomState').subscribe(data => {
      this.roomInfo = data;
    })

    this.http.get<roomInfoData[]>('https://ecosystem-smart-home.herokuapp.com/Room%D0%A1ondition/GetRoomStatisticByWeek').subscribe(data => {
      this.dataTemperature = data.map(d =>
        ([formatDate(d.dateLastCheckState, 'dd/MM/yyyy, HH:mm:ss', "en-US"), d.temperature])
      );
      this.dataHumidity = data.map(d =>
        ([formatDate(d.dateLastCheckState, 'dd/MM/yyyy, HH:mm:ss', "en-US"), d.humidity])
      );
      this.dataLuminosity = data.map(d =>
        ([formatDate(d.dateLastCheckState, 'dd/MM/yyyy, HH:mm:ss', "en-US"), d.luminosity])
      );
      this.dataPressure = data.map(d =>
        ([formatDate(d.dateLastCheckState, 'dd/MM/yyyy, HH:mm:ss', "en-US"), d.pressure])
      );
    })
  }
}
