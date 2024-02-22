import { useEffect, type ChangeEvent, useState } from 'react';
import { useProductsFilter } from '../../../hooks/useProductsFilter';
import type { Data,  } from '../../../types/Data';
import data from '../../../public/data.json';
import CardProduct from '../products/cardProduct';

interface Props {
  title: string;
}

type AsideFilterProps = {
  arrayCategories:string[],
  arrayBrands:string[],
  availableCategoriesWithSubCategories:[string,Set<string>][]
  setSearchFilter:(search:string)=>void,
  brandsFilter:Set<string>,
  categoriesFilter:Map<string, Set<string>>
  subCategoriesFilter:Set<string>,
} & {
  [key in 'addFilter'|'removeFilter']:{
    brand:(brand:string)=>void,
    categorie:(categorie:string)=>void,
    subCategorie:(categorie:string,subCategorie:string)=>void
  }
}

type AddAndRemoveFilter = {
  addFilter:(filter:string)=>void;
  removeFilter:(filter:string)=>void;
}

type AccordionItemProps = Omit<{
  subItems:string[],
} & AccordionItemInputProps
,'subItem'>

type AccordionItemInputProps = {
  title:string,
  subItem:string,
} & AddAndRemoveFilter;

const HeaderSort:React.FC = ()=>(
  <div className="d-flex ms-auto align-items-center">
      <div className="dropdown">
        <button className="btn btn-link text-dark mb-0 dropdown-toggle" type="button" id="sortButton" data-bs-toggle="dropdown" aria-expanded="false">
          Ordenar
        </button>
        <ul className="dropdown-menu" aria-labelledby="sortButton">
          {/* <li><a className="dropdown-item" href="javascript:;">Mas Popular</a></li> */}
          {/* <li><a className="dropdown-item" href="javascript:;">Mejor Rating</a></li> */}
          <li><a className="dropdown-item" href="#">Mas Nuevo</a></li>
          {/* <li><a className="dropdown-item" href="javascript:;">Precio: Ascendente</a></li> */}
          {/* <li><a className="dropdown-item" href="javascript:;">Precio: Descendiente</a></li> */}
        </ul>
      </div>
    </div>
)

const Header:React.FC<{title:string}> = ({title})=>(
  <div className="d-flex border-bottom pb-3">
    {(title.length != 0) && 
      <h2 className="mb-3">{title}</h2>
    }
    <HeaderSort/>
  </div>
)

const AsideSearch:React.FC<{setSearchFilter:(search:string)=>void}> = ({setSearchFilter})=>{
  const onChangeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
    const value = (event.target as HTMLInputElement).value.trim();
    setSearchFilter(value);
  }
  return(
    <input type="text" className="form-control" placeholder="Buscar" onChange={onChangeHandler}/>
)}

// type Category 
const AsidePrincipalCategoriesFilter:React.FC<{principalCategories:string[]}> = ({principalCategories})=>(
  <ul className="list-unstyled ms-3">
    {principalCategories.map((categorie)=>
      <li key={categorie} className="mb-2"><a href="#">{categorie}</a></li>
    )}
  </ul>
) 

const AsideAccordionItemInput:React.FC<AccordionItemInputProps> = ({addFilter,removeFilter,subItem,title})=>{
  const [checked,setChecked] = useState<boolean>(false)
  
  const onChangeHandler = ()=>{
    return !checked?setCheckedTrue(subItem):setCheckedFalse(subItem);
  }

  const setCheckedTrue = (value:string)=>{
    setChecked(true);
    addFilter(value);
  }

  const setCheckedFalse = (value:string)=>{
    setChecked(false);
    removeFilter(value);
  }

  const checkChecked = ()=>{
    const params = new URLSearchParams(window.location.search);

    if(params.has(title)){
      const filters = (params.get(title) as string).split(',');
      filters.forEach(filterString=>{
        filterString === subItem && setCheckedTrue(filterString);
      })
    }
  }

  useEffect(checkChecked,[])
  
  return (
    <input 
      checked={checked} 
      onChange={onChangeHandler} 
      className="form-check-input me-2" 
      type="checkbox" 
      value={subItem} 
    />
  )
}

const AsideAccordionItem:React.FC<AccordionItemProps> = ({title,subItems,...accordionItemInputProps})=>{
  
  return (
  <div className="accordion-item">
        <h5 className="accordion-header" id="headingThree">
          <button className="accordion-button border-bottom border-top font-weight-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target={`#${title}`} aria-expanded="false" aria-controls={title}>
            {title}
            <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
            <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
          </button>
        </h5>
        <div id={title} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionArrivals">
          <div className="accordion-body text-sm opacity-8">
            {subItems.map((subItem,index)=>(
              <div key={index} className="form-check justify-content-start ">
                <AsideAccordionItemInput {...accordionItemInputProps} title={title} subItem={subItem}/>
                <label className="custom-control-label mb-0">{subItem}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
)}



const AsideFilter:React.FC<AsideFilterProps> = ({availableCategoriesWithSubCategories,arrayBrands,arrayCategories,addFilter,removeFilter,setSearchFilter,brandsFilter,categoriesFilter,subCategoriesFilter})=>{
  
  return (
    <div className="col-12 col-md-2">
      <AsideSearch setSearchFilter={setSearchFilter}/>

      {/* <hr /> */}

        <div className="accordion" id="accordionArrivals">
          <AsideAccordionItem 
            title={"marcas"} 
            subItems={arrayBrands} 
            addFilter={addFilter.brand} 
            removeFilter={removeFilter.brand}
          />
          <AsideAccordionItem 
            title={"categorias"} 
            subItems={arrayCategories} 
            addFilter={addFilter.categorie} 
            removeFilter={removeFilter.categorie}
          />

          {availableCategoriesWithSubCategories.map(([categorie,subCategoriesSet])=>{
            const addFilterHandler = (subCategorie:string)=>{
              addFilter.subCategorie(categorie,subCategorie)
            }

            const removeFilterHandler = (subCategorie:string)=>{
              removeFilter.subCategorie(categorie,subCategorie)
            }

            return (
            <AsideAccordionItem 
              title={categorie} 
              subItems={Array.from(subCategoriesSet)} 
              addFilter={addFilterHandler} 
              removeFilter={removeFilterHandler}
            />)
          })}
        </div>

      {/* <AsidePrincipalCategoriesFilter principalCategories={Object.keys(categories)}/> */}

    </div>
)}


const ProductOverview:React.FC<Props> = ({title}) => {
  
  const {
    filteredProducts,...asideFilterProps
  } = useProductsFilter(data.products);


  return (
    <>
      <div className="card card-product card-plain">
        <Header {...{title}}/>
        <div className="row mt-5">
          <AsideFilter 
            {...asideFilterProps}
          />

          <div className="col-12 col-md-10">
            <div className="d-flex h-100">
              <div className="row">
                {filteredProducts.map((product,index) => 
                  <div className="col-md-5 col-lg-3" key={index}>
                    <CardProduct 
                      {...product}
                      position = "center"
                    />
                  </div>
                )}        
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
