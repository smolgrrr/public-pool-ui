import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(
        private httpClient: HttpClient
    ) { }

    public getInfo() {
        return this.httpClient.get(`/api/info`) as Observable<any>;
    }
    public getNetworkInfo() {
        return this.httpClient.get(`/api/network`) as Observable<any>;
    }
    public getInfoChart() {
        return this.httpClient.get(`/api/info/chart`) as Observable<any>;
    }
}
