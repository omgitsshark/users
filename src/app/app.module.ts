import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  UserPageComponent,
  UserCardComponent,
  UserDetailComponent
} from "./components";

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UserCardComponent,
    UserDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
