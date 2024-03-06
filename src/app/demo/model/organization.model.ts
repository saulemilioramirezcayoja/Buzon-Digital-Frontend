export interface Organization {
    name: string;
    email: string;
    phone: string;
    address: string;
    status: 'active' | 'inactive';
    additionalInfo: string;
}