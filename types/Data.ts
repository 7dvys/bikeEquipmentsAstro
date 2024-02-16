type Image = {
    src:string;
    alt:string;
}

type Promo = {
    title:string;
    subtitle:string;
    background:Image
};

type Categorie =  {
    thumb_src: string;
    title: string,
    collection: string
}

type ProductVariant = {
    id:string;
    name:string;
    sizes:{[size:string]:number}|undefined;
    stock:number|undefined;
}

export type Product = {
    id: string;
    thumg:Image;
    images: Image[];
    
    title: string;
    price?: number;
    
    shortDescription: string;
    largeDescription: string;
    
    details?: string;
    highlights?: string[];
    
    rating?: number;
    reviews?: number;

    sizes?:string[];

    featuresDetails?:{[feature:string]:string}
    variants?:ProductVariant[];
}

export type Data = {
    landing:Promo;
    new:Promo;
    categories:Categorie[];
    products:Product[];
}

