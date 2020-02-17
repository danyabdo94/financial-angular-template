import { Component, OnInit } from "@angular/core";
import { singleMulti } from "../../data";
import * as shape from "d3-shape";

@Component({
  selector: "app-stock-trends",
  templateUrl: "./stock-trends.component.html",
  styleUrls: ["./stock-trends.component.scss"]
})
export class StockTrendsComponent implements OnInit {
  listRequests = singleMulti;
  multi: any[];
  view: any[] = [120, 60];

  // options
  animations = true;

  colorScheme = {
    domain: ["#508FF4", "#11DCDC", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"]
  };

  curve = shape.curveNatural;

  constructor() {
    Object.assign(this, { singleMulti });
  }

  ngOnInit() {}
}
