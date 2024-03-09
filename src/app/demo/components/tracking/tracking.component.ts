import { Component } from '@angular/core';
import { TrackingCodeService } from 'src/app/demo/service/tracking-code.service';
import { Request } from 'src/app/demo/model/request.model';

@Component({
    selector: 'app-tracking',
    templateUrl: './tracking.component.html',
    styleUrls: ['./tracking.component.css'],
})
export class TrackingComponent {
    code: string = '';
    requests: Request[] = [];

    constructor(private trackingCodeService: TrackingCodeService) {}

    search() {
        if (this.code) {
            this.trackingCodeService.searchRequestByCode(this.code).subscribe({
                next: (request) => {
                    this.requests = [request];
                },
                error: () => {
                    this.requests = [];
                },
            });
        }
    }
}