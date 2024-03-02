import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    private baseUrl = 'http://localhost:8080/api/requests';

    constructor(private http: HttpClient, private authService: AuthService) { }

    getRequests(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    getRequestsByOrganization(): Observable<any> {
        const token = this.authService.currentUserValue?.token;
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.get<Request[]>(`${this.baseUrl}/by-organization`, { headers });
    }
}