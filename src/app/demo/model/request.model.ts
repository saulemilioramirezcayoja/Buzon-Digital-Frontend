export interface Organization {
    organizationId: number;
}

export interface Request {
    organization: Organization;
    state: string;
    creationDate: string;
    updateDate: string | null;
    closedDate: string | null;
    trackingCodeId: number | null;
    comment: string | null;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string | null;
    address: string | null;
    organizationName: string | null;
}
