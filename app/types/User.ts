export interface User {
    map(arg0: (user: any) => import("react").JSX.Element): import("react").ReactNode;
    id?: number;
    name?: string;
    email?: string;
    address?: {
        street : string;
        suite :string;
        city : string;
        zipcode : string;
        geo : {
            lat : string;
            lng : string;
        }
    },
    phone?: string;
    website?: string;
    company?: {
        name : string;
        catchPhrase : string;
        bs : string;
    }
}[]