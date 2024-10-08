export interface Product {
    id:number;
    name:string;
    photo:string;
    price:number;
    priceAfterDisc:number;
    description:string;
    disc:boolean;
    type:string;
    availableSizes:Array<number>;
    colorsAvailable:Array<string>;

}
