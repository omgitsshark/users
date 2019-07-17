import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class PrevRouteService {
  private prevRoute: string = "";

  constructor() {}
  public setPrevRoute(route: string): void {
    this.prevRoute = route;
  }

  public getPrevRoute(): string {
    return this.prevRoute;
  }
}
