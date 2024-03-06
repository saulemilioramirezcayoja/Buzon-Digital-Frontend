export interface UserRef {
    userId: number;
}

export interface RequestRef {
    requestId: number;
}

export interface AuditAction {
    user: UserRef;
    request: RequestRef;
    actionDetail: string;
    actionDate: string;
}
