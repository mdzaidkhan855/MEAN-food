export class Food{
    
    // required field marked by !
    id!:string;
    name!:string;
    price!:number;
    // optional
    tags?:string[];

    favorite!:boolean;
    stars!:number;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;

}