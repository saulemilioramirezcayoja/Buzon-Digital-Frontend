import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { FileUpload } from 'primeng/fileupload';
import { RequestAttachmentUpload } from '../../model/request-attachment-upload.model';
import { RequestService } from '../../service/request.service';
import { RequestAttachmentService } from '../../service/request-attachment.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    providers: [MessageService],
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    requestForm: FormGroup;
    orgId: string;
    selectedFiles: RequestAttachmentUpload[] = [];
    @ViewChild('signedUpload') signedUpload!: FileUpload;
    @ViewChild('otherUpload') otherUpload!: FileUpload;

    constructor(
        private fb: FormBuilder,
        private requestService: RequestService,
        private requestAttachmentService: RequestAttachmentService,
        private messageService: MessageService,
        private route: ActivatedRoute
    ) {
        this.requestForm = this.fb.group({
            state: ['received', Validators.required],
            comment: ['Revisión inicial pendiente', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', Validators.maxLength(20)],
            address: ['', Validators.maxLength(255)],
            organizationName: ['', Validators.required],
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
                    next: (response) => {
                        const requestId = response.requestId;
                        this.selectedFiles.forEach(
                            (file) => (file.requestId = requestId)
                        );
                        this.uploadAttachments(requestId);
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Request successfully created',
                        });
                        this.resetFormAndFiles();
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

    uploadAttachments(requestId: number) {
        if (this.selectedFiles.length > 0) {
            this.requestAttachmentService
                .uploadAttachments(this.selectedFiles)
                .subscribe({
                    next: (response) => {
                        console.log(
                            'Archivos cargados correctamente:',
                            response
                        );
                    },
                    error: (error) =>
                        console.error('Error al cargar archivos:', error),
                });
        }
    }

    onUpload(event: any, attachmentType: 'signed_document' | 'other') {
        for (let file of event.files) {
            this.convertToBase64(file, attachmentType);
        }
    }

    convertToBase64(file: File, attachmentType: 'signed_document' | 'other') {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const base64EncodedFile = e.target.result.split(',')[1];
            this.selectedFiles.push({
                requestId: 0,
                fileName: file.name,
                fileSize: file.size,
                attachmentType: attachmentType,
                base64EncodedFile: base64EncodedFile,
            });
        };
        reader.readAsDataURL(file);
    }

    resetFormAndFiles() {
        this.requestForm.reset({
            state: 'received',
            comment: 'Revisión inicial pendiente',
        });
        this.selectedFiles = [];
        this.signedUpload.clear();
        this.otherUpload.clear();
    }
}
