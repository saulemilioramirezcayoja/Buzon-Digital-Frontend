import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private authUrl = 'http://localhost:8080/api/auth';
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<any>(
            JSON.parse(localStorage.getItem('currentUser') || '{}')
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    public getCurrentUser(): any {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http
            .post<any>(`${this.authUrl}/login`, { email, password })
            .pipe(
                map((user) => {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user;
                })
            );
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
    }

    isAuthenticated(): boolean {
        const user = this.currentUserValue;
        return !!user && !!user.token;
    }
}
