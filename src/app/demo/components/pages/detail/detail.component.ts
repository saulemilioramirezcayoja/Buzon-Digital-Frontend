import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/demo/service/request.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html'
})

export class DetailComponent implements OnInit {
    requestDetails: any = null;
    constructor(
        private requestService: RequestService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.getRequest(Number(id));
            }
        });
    }

    getRequest(id: number) {
        this.requestService.getRequestById(id).subscribe(
            request => {
                this.requestDetails = request;
            },
            error => {
                console.error('Error al obtener la solicitud:', error);
            }
        );
    }
}