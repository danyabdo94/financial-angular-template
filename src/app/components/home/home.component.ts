import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  user: User = new User(1, "Scranton, PA");
  isNavOpen = true;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.router.navigate(["/login"]);
  }
}
