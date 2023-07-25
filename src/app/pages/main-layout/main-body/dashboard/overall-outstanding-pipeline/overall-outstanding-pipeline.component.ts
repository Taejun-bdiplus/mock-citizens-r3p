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
        labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
	       datasets: [{
    label: 'My First Dataset',
    data: [300, 240, 100, 432, 253, 34],
    backgroundColor: [
      'red',
      'pink',
      'green',
			'yellow',
      'orange',
      'blue',			
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
