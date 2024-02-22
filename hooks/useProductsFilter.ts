import { useEffect, useState,useMemo } from "react";
import type { Data } from "../types/Data"; 
import { getBrandsAndCategoriesWithSubCategoriesFromProducts } from "../utils/getBrandsAndCategoriesWithSubCategoriesFromProducts";

export const useProductsFilter = (products:Data['products'])=>{
    const [searchFilter,setSearchFilter] = useState<string>('');
    const [brandsFilter,setBrandsFilter] = useState<Set<string>>(new Set());
    const [categoriesFilter,setCategoriesFilter] = useState<Map<string,Set<string>>>(new Map());
    
    let {brands,categories} = getBrandsAndCategoriesWithSubCategoriesFromProducts(products);

    const availableCategoriesWithSubCategories = Object.entries(categories).filter(([categorie])=>categoriesFilter.has(categorie));  
 
    const addFilter = {
        brand:(brand:string)=>setBrandsFilter(currentSet=>{
            const newSet = new Set(currentSet)
            newSet.add(brand)
            return newSet;
        }),
        categorie:(categorie:string)=>setCategoriesFilter(currentMap=>{
            const newMap = new Map(currentMap);
            newMap.set(categorie,new Set());
            return newMap;
        }),
        subCategorie:(categorie:string,subCategorie:string)=>setCategoriesFilter(currentMap=>{
            const newMap = new Map(currentMap);
            const newSet = newMap.get(categorie);

            if(newSet === undefined)
            return currentMap;

            newSet.add(subCategorie);
            newMap.set(categorie,newSet);
            return newMap;
        })
    }
    
    const removeFilter = {
        brand:(brand:string)=>setBrandsFilter(currentSet=>{
            const newSet = new Set(currentSet)
            newSet.delete(brand)
            return newSet;
        }),
        categorie:(categorie:string)=>setCategoriesFilter(currentMap=>{
            const newMap = new Map(currentMap);
            newMap.delete(categorie);
            return newMap;
        }),
        subCategorie:(categorie:string,subCategorie:string)=>setCategoriesFilter(currentMap=>{
            const newMap = new Map(currentMap);
            const newSet = newMap.get(categorie);

            if(newSet === undefined)
            return currentMap;

            newSet.delete(subCategorie);
            newMap.set(categorie,newSet);
            return newMap;
        })
    }
    
    const normalizedSearch = searchFilter.trim().toLowerCase();
    const filteredProductsBySearch = normalizedSearch === ''
        ?products
        :products.filter(({title})=>(title.toLowerCase().includes(searchFilter))); 
    
    let filteredProductsByBrands = filteredProductsBySearch;
    if(brandsFilter.size > 0){
        filteredProductsByBrands = filteredProductsBySearch.filter(({brand})=>brandsFilter.has(brand));
        categories = getBrandsAndCategoriesWithSubCategoriesFromProducts(filteredProductsByBrands).categories;
    }


    let filteredProductsByCategories = filteredProductsByBrands;
    const subCategoriesFilter:Set<string> = new Set();
    
    if(categoriesFilter.size > 0){
        filteredProductsByCategories = filteredProductsByBrands.filter(({categorie})=>categoriesFilter.has(categorie));
        categoriesFilter.forEach((subCategories)=>subCategories.forEach(subCategorie => subCategoriesFilter.add(subCategorie)));
    }

    if(subCategoriesFilter.size > 0)
    filteredProductsByCategories = filteredProductsByCategories.filter(({subCategorie})=>subCategoriesFilter.has(subCategorie))

    const arrayBrands = Array.from(brands);
    const arrayCategories = Object.keys(categories);
    
    return {filteredProducts:filteredProductsByCategories,availableCategoriesWithSubCategories,arrayBrands,arrayCategories,addFilter,removeFilter,setSearchFilter,brandsFilter,categoriesFilter,subCategoriesFilter};
}