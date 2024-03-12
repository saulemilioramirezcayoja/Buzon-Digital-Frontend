import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestAttachmentUpload } from '../model/request-attachment-upload.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RequestAttachmentService {
    private uploadUrl = 'http://localhost:8080/api/requestAttachments/upload';

    constructor(private http: HttpClient) { }

    uploadAttachments(attachments: RequestAttachmentUpload[]): Observable<any> {
        return this.http.post(this.uploadUrl, attachments);
    }
}