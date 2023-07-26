import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-overall-outstanding-pipeline',
  templateUrl: './overall-outstanding-pipeline.component.html',
  styleUrls: ['./overall-outstanding-pipeline.component.css']
})
export class OverallOutstandingPipelineComponent {
  public chart: any;
  
  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Due > 7 Days', 'Due Within 7 Days', 'Past Due', ],
        datasets: [{
        label: 'My First Dataset',
        data: [80, 20, 100],
        backgroundColor: [
          'green',
          'purple',
          'blue',			
        ],
        hoverOffset: 4
      }],
      },
      options: {
        aspectRatio: 3.5,
        plugins: {
          legend: {
            position: 'right',
      }},

    }});
  }

  ngOnInit(): void {
    this.createChart();
  }
}
