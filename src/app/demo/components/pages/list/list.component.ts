import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RequestService } from 'src/app/demo/service/request.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    providers: [MessageService]
})

export class ListComponent implements OnInit {
    requests: Request[] = [];

    constructor(private requestService: RequestService) { }

    ngOnInit(): void {
        this.loadRequests();
    }

    loadRequests(): void {
        this.requestService.getRequestsByOrganization().subscribe({
            next: (data) => {
                this.requests = data;
            },
            error: (e) => console.error(e)
        });
    }
}