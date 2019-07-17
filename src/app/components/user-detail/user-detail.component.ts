import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService, PrevRouteService } from "src/app/services";
import { IUser, IServerResponse } from "src/app/interfaces";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  private userId: number;
  public user: IUser;
  public prevRoute: string = "";

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private prevRouteService: PrevRouteService
  ) {
    this.userId = +this.route.snapshot.params.userId;
    this.prevRoute = this.prevRouteService.getPrevRoute();
  }

  ngOnInit() {
    this.loadUserData();
  }

  private loadUserData(): void {
    this.userService
      .getUserById(this.userId)
      .subscribe((res: IServerResponse<IUser>) => {
        this.user = res.data;
      });
  }
}
