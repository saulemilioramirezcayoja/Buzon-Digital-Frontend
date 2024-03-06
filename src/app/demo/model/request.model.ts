export interface Organization {
    organizationId: number;
}

export interface Request {
    organization: Organization;
    state: string;
    creationDate: string;
    updateDate: string;
    closedDate: string | null;
    trackingCodeId: number | null;
    comment: string;
    applicantName: string;
    applicantId: string;
    applicantEmail: string;
    applicantPhone: string;
    additionalRequirements: string;
}