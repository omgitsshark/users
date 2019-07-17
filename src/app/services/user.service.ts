import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable, BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

import { IServerResponse, IUser, IServerResponseList } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private baseUrl = "https://reqres.in/api/users";
  private cachePage: {
    [pageNumber: number]: BehaviorSubject<IServerResponseList<IUser[]>>;
  } = {};
  private cacheUser: {
    [pageNumber: number]: BehaviorSubject<IServerResponse<IUser>>;
  } = {};

  constructor(private httpClient: HttpClient) {}

  public getUsersPerPage(
    pageNumber: number
  ): Observable<IServerResponseList<IUser[]>> {
    if (this.cachePage[pageNumber]) {
      return this.cachePage[pageNumber];
    }

    let params = new HttpParams();
    params = params.set("page", pageNumber.toString());

    return this.httpClient
      .get<IServerResponseList<IUser[]>>(this.baseUrl, {
        params
      })
      .pipe(
        tap((res: IServerResponseList<IUser[]>) => {
          this.cachePage[pageNumber] = new BehaviorSubject(res);
        })
      );
  }

  public getUserById(id: number): Observable<IServerResponse<IUser>> {
    if (this.cacheUser[id]) {
      return this.cacheUser[id];
    }

    return this.httpClient.get(`${this.baseUrl}/${id}`).pipe(
      tap((res: IServerResponse<IUser>) => {
        this.cacheUser[id] = new BehaviorSubject(res);
      })
    );
  }
}
