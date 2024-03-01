import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    providers: [MessageService]
})
export class ListComponent {
}
