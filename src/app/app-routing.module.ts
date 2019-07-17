import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserPageComponent, UserDetailComponent } from "./components";

const routes: Routes = [
  {
    path: "",
    redirectTo: "users/1",
    pathMatch: "full"
  },
  {
    path: "users/:pageId",
    component: UserPageComponent
  },
  {
    path: "users/detail/:userId",
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
