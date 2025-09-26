export interface Email {
    id:number;
    to:string;
    from:string;
    subject:string;
    body:string| null
}