import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../service/request.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    providers: [MessageService],
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    requestForm: FormGroup;
    orgId: string;

    constructor(
        private fb: FormBuilder,
        private requestService: RequestService,
        private messageService: MessageService,
        private route: ActivatedRoute
    ) {
        this.requestForm = this.fb.group({
            state: ['received', Validators.required],
            comment: ['Revisión inicial pendiente', Validators.required],
            applicantName: ['', Validators.required],
            applicantId: ['', Validators.required],
            applicantEmail: ['', [Validators.required, Validators.email]],
            applicantPhone: ['', Validators.required],
            additionalRequirements: [''],
        });
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.orgId = params['org'];
        });
    }

    onSubmit() {
        if (this.requestForm.valid) {
            const formData = this.requestForm.value;
            const now = new Date().toISOString();

            const requestPayload = {
                ...formData,
                creationDate: now,
                updateDate: now,
                closedDate: null,
                trackingCodeId: null,
            };

            this.requestService
                .createRequest(requestPayload, this.orgId)
                .subscribe({
                    next: () => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Request successfully created',
                        });
                        this.requestForm.reset();
                    },
                    error: (error) => {
                        console.error('Error creating request:', error);
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'Failed to create request',
                        });
                    },
                });
        } else {
            this.messageService.add({
                severity: 'warn',
                summary: 'Warning',
                detail: 'Please complete the form correctly',
            });
        }
    }
}
