import {Component, Input, OnInit} from '@angular/core';
import {roomInfoData} from "../state-of-room.component";
import {formatDate} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-room-state-chart',
  templateUrl: './room-state-chart.component.html',
  styleUrls: ['./room-state-chart.component.scss']
})
export class RoomStateChartComponent implements OnInit {

  @Input()
  api: string = '';


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

  ngOnInit(): void {
    this.http.get<roomInfoData[]>(`https://ecosystem-smart-home.herokuapp.com/Room%D0%A1ondition/${this.api}`).subscribe(data => {
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
