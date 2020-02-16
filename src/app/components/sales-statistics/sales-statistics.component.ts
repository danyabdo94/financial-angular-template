import { Component, OnInit } from "@angular/core";
import { multi } from "./data";

@Component({
  selector: "app-sales-statistics",
  templateUrl: "./sales-statistics.component.html",
  styleUrls: ["./sales-statistics.component.scss"]
})
export class SalesStatisticsComponent implements OnInit {
  multi: any[];
  view: any[] = [700, 300];

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = "Year";
  yAxisLabel = "Exports";
  timeline = true;

  colorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"]
  };

  constructor() {
    Object.assign(this, { multi });
  }

  ngOnInit() {}

}
