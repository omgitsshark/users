import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { UserService } from "src/app/services";
import { IUser, IServerResponseList } from "src/app/interfaces";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.scss"]
})
export class UserPageComponent implements OnInit {
  public usersList: IUser[] = [];
  public countOfPages: number[] = [];
  public userUrl = "/users/";

  private currentPage: number = 1;
  private $destroyed = new Subject();

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.currentPage = this.route.snapshot.params.pageId;
  }

  ngOnInit() {
    this.loadUsersAnPagesCount();
  }

  private loadUsersAnPagesCount(): void {
    this.userService
      .getUsersPerPage(this.currentPage)
      .pipe(takeUntil(this.$destroyed))
      .subscribe((res: IServerResponseList<IUser[]>) => {
        this.usersList = [...res.data];
        this.countOfPages = [];

        for (let i = 1; i < res.total_pages; i++) {
          this.countOfPages.push(i);
        }
      });
  }

  public getPageUrl(pageNumber: number): string {
    return `${this.userUrl}${pageNumber}`;
  }

  public getUserUrl(userId: number): string {
    return `${this.userUrl}/detail/${userId}`;
  }

  public changePage(pageNumber: number) {
    this.currentPage = pageNumber;

    this.loadUsersAnPagesCount();
  }
}
