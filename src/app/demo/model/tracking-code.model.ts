export interface RequestRef {
    requestId: number;
}

export interface TrackingCode {
    code: string;
    isActive: boolean;
    generationDate: string;
    expiresAt: string;
    request: RequestRef;
}