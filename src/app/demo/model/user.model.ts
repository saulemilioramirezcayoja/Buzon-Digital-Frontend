export interface OrganizationRef {
    organizationId: number;
}

export interface User {
    name: string;
    email: string;
    role: 'operator' | 'administrator';
    password: string;
    organization: OrganizationRef;
    lastLogin: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
}