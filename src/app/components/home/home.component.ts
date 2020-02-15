import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  user: User = new User(1, "Scranton, PA");
  isNavOpen = true;
  constructor() {}

  ngOnInit(): void {}

  logout() {}
}
