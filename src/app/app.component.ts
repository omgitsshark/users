import { Component, OnInit } from "@angular/core";
import { PrevRouteService } from "./services";
import { Router, RouterEvent, NavigationStart } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    private prevRouteService: PrevRouteService,
    private router: Router
  ) {}
  ngOnInit() {
    this.initRouteObserver();
  }

  private initRouteObserver(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.prevRouteService.setPrevRoute(this.router.url);
      }
    });
  }
}
