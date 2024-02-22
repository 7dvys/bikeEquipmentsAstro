import type { Data } from "../types/Data";

export const getBrandsAndCategoriesWithSubCategoriesFromProducts = (products:Data['products'])=>{
    return products.reduce((acc,{brand,categorie,subCategorie})=>{
      acc.brands.add(brand);
  
      if(!(categorie in acc.categories))
      acc.categories[categorie] = new Set();

      acc.categories[categorie].add(subCategorie);
  
      return acc;
    },{categories:{} as {[categorie:string]:Set<string>},brands:new Set() as Set<string>})
}