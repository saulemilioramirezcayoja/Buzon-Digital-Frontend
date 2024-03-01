import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    errorMessage: string = '';
    isLoading: boolean = false;

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private router: Router
    ) { }

    login() {
        this.isLoading = true;
        this.authService.login(this.email, this.password).subscribe(
            (data) => {
                this.router.navigate(['/']);
                this.isLoading = false;
            },
            (error) => {
                this.errorMessage = 'Correo o contraseña incorrecta';
                this.isLoading = false;
            }
        );
    }
}
