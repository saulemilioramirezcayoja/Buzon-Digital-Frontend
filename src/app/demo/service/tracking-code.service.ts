import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Request } from "../model/request.model";


@Injectable({
    providedIn: 'root',
})
export class TrackingCodeService {
    private trackingCodeUrl = 'http://localhost:8080/api/trackingCodes';

    constructor(private http: HttpClient) { }

    searchRequestByCode(code: string): Observable<Request> {
        return this.http.get<Request>(`${this.trackingCodeUrl}/search/${code}`);
    }
}