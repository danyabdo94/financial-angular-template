import { Component, OnInit } from "@angular/core";
import { multi } from "../../data";
import * as shape from "d3-shape";

@Component({
  selector: "app-performance",
  templateUrl: "./performance.component.html",
  styleUrls: ["./performance.component.scss"]
})
export class PerformanceComponent implements OnInit {
  data = multi;
  multi: any[];
  view: any[] = [300, 200];
  curve = shape.curveNatural;


  // options
  legend = false;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = "Year";
  yAxisLabel = "Population";
  timeline = true;

  colorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"]
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {}
}
