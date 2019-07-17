import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { IUser } from "src/app/interfaces";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input() public user: IUser;

  disablePropagation(e: Event) {
    e.stopPropagation();
  }
}
