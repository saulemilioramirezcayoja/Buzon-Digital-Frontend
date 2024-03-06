export interface RequestRef {
    requestId: number;
}

export interface RequestAttachment {
    request: RequestRef;
    fileName: string;
    filePath: string;
    fileType: string;
    attachmentType: 'signed_document' | 'other';
    uploadedAt: string;
    fileSize: number;
}