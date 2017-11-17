import { Router } from "@angular/router";
import { CacheService } from "../../services/cache.service";
import { FormsModule } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  constructor(
    protected auth: AuthenticationService,
    public cacheService: CacheService,
    private router: Router
  ) {}
  username = "";

  ngOnInit() {}

  logout() {
    this.auth.logout();
    this.auth.loggedIn = false;
    console.log("logged out");
    this.router.navigate(["/login"]);
  }
}
