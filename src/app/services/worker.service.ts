import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getGroupWorkerInfo(address: string, workerName: string): Observable<any> {
    return this.httpClient.get(`/api/client/${address}/${workerName}`);
  }
  public getWorkerInfo(address: string, workerName: string, workerId: string): Observable<any> {
    return this.httpClient.get(`/api/client/${address}/${workerName}/${workerId}`);
  }
}
