import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Store } from "./model/store";

@Injectable()
export class StoreService {
  private url = 'https://localhost:44382/api/app-store';

  httpOptions = {

   Headers: new HttpHeaders({ 'content-type': 'application/json' })
  }


  constructor(private http: HttpClient) { }

  getStore() {
    return this.http.get(this.url)
  }
}

