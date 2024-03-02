import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RequestService } from 'src/app/demo/service/request.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    providers: [MessageService]
})

export class ListComponent implements OnInit {
    requests: Request[] = [];

    constructor(private router: Router, private requestService: RequestService) { }

    ngOnInit(): void {
        this.loadRequests();
    }

    onSelectRequest(requestId: number): void {
        this.router.navigate(['/pages/detail', requestId]);
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