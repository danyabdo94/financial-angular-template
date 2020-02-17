import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ratio-analysis",
  templateUrl: "./ratio-analysis.component.html",
  styleUrls: ["./ratio-analysis.component.scss"]
})
export class RatioAnalysisComponent implements OnInit {
  list = [
    {
      name: "Roce",
      value: 64,
      color: "primary"
    },
    {
      name: "NET INCOME MARGIN",
      value: 74,
      color: "warn"
    },
    {
      name: "GROSS INCOME MARGIN",
      value: 80,
      color: "accent"
    },
    {
      name: "ASSETS TURNOVER",
      value: 88,
      color: "primary"
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
