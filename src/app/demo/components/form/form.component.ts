import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    providers: [MessageService]
})
export class FormComponent {
}
