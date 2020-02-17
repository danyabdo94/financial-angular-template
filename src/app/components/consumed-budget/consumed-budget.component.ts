import { Component, OnInit } from "@angular/core";
import { single } from "../../data";

import * as shape from "d3-shape";

@Component({
  selector: "app-consumed-budget",
  templateUrl: "./consumed-budget.component.html",
  styleUrls: ["./consumed-budget.component.scss"]
})
export class ConsumedBudgetComponent implements OnInit {
  single: any[];
  view: any[] = [400, 200];

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  ngOnInit(){}
  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }
}
