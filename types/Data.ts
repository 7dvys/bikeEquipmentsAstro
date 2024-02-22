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
    images: Image[];
}

type ProductVariantWithSizes =ProductVariant & {
    sizes: {[size:string]:number};
}

type ProductVariantWithoutSizes = ProductVariant & {
    stock: number;
}

export type Product = {
    id: string;
    
    title: string;
    price?: number;
    
    shortDescription: string;
    largeDescription: string;

    details?: string;
    highlights?: string[];
    
    rating?: number;
    reviews?: number;

    featuresDetails?:{[feature:string]:string};
    
    variants:(ProductVariantWithSizes|ProductVariantWithoutSizes)[];
    
    categorie: string;
    subCategorie: string;
    brand: string; 
}

export type Data = {
    landing:Promo;
    new:Promo;
    categories:Categorie[];
    products:Product[];
}

