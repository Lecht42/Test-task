export default interface IPost {
    userId: number; 
    id: number; 
    title: string; 
    body: string;

    [index: string]: string | number;
} 