import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Chart,registerables  } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chart: any;
  data: any[] = [];


  constructor(private DataService: DataService) {  Chart.register(...registerables); }

  ngOnInit(): void {
    this.DataService.getData().subscribe((data) => {

      this.data = data;
      this.createChart();
    });
  }

  createChart(): void {
    const month = this.data.map((item) => item.Month);

    const Primaryproduct = this.data.map((item) => item.Primaryproduct);

    const Secondaryproduct = this.data.map((item) => item.Secondaryproduct);


    this.chart = new Chart('chart', {
      type: 'bar',
      data: {
        labels: month,
        datasets: [


          {
            label: 'Primaryproduct',
            data: Primaryproduct,

            backgroundColor: 'green',
            //fill: false,

          },

          {
            label: 'Secondaryproduct',
            data: Secondaryproduct,

            backgroundColor: 'orange',
            //fill: false,

          }
        ]
      }
    })
  }

  // download chart as a pdf
  downloadPDF() {

  }



  // download chart as a excel
  downloadExcel() {

  }

}
