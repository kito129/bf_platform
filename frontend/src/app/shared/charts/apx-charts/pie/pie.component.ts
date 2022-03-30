import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartOptions} from "../../../../model/chartOptions";
import {Pie} from "../../../../model/apxCharts/pie";

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
})
export class PieComponent implements OnInit {

  @Input() data: number[]
  @Input() label: string[]
  @Input() height: number

  public donutChartOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnInit(): void {

    this.donutChartOptions = {
      labels: this.label,
      colors: ["#627CF5", "#bc427d","#c6cb31","#feffd5"],
      chart: {
        height: this.height,
        type: "donut",
        animations: {
          enabled: false
        }
      },
      stroke: {
        colors: ['rgba(0,0,0,0)']
      },
      fill: {
        type: "gradient"
      },
      legend: {
        position: 'left',
        formatter: function(labels, opts) {
          return labels + " - " + opts.w.globals.series[opts.seriesIndex];
        }
      },
      theme: {
        mode: 'dark'
      },
    };
  }



}
