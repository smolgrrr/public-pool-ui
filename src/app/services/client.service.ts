import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getClientInfo(address: string) {
    return this.httpClient.get(`http://${window.location.hostname}:2019/api/client/${address}`);
  }
  public getClientInfoChart(address: string) {
    return this.httpClient.get(`http://${window.location.hostname}:2019/api/client/${address}/chart`) as Observable<any[]>;
  }
}
