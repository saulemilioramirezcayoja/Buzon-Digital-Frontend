import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/demo/service/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: any;
    isLoading: boolean = false;
    error: string | null = null;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.loadUser();
    }

    loadUser(): void {
        try {
            this.user = this.authService.getCurrentUser();
            if (!this.user) {
                throw new Error('Usuario no autenticado.');
            }
        } catch (err) {
            console.error(err);
            this.error = 'No se pudo cargar la información del usuario.';
        }
    }
}