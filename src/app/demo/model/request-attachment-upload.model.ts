export interface RequestAttachmentUpload {
    requestId: number;
    fileName: string;
    fileSize: number;
    attachmentType: 'signed_document' | 'other';
    base64EncodedFile: string;
}