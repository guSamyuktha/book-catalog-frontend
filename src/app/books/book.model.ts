export interface Book {
    id: number;
    title: string;
    description: string;
    published: boolean;
    }
   
export interface BookRequest {
        title: string;
        description: string;
        published: boolean;
        }

export interface ApiResponse {
    success: boolean;
    message: string | null;
    data: Book[];
    errors: string | null;
    errorCode: number;
    }
   