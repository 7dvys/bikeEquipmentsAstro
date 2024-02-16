import { Fragment } from 'react';
import type { Data } from '../../../types/Data';
import data from '../../../public/data.json';
import CardProduct from '../products/cardProduct';

interface Props {
  title: string;
}

const HeaderSort:React.FC = ()=>(
  <div className="d-flex ms-auto align-items-center">
      <div className="dropdown">
        <button className="btn btn-link text-dark mb-0 dropdown-toggle" type="button" id="sortButton" data-bs-toggle="dropdown" aria-expanded="false">
          Ordenar
        </button>
        <ul className="dropdown-menu" aria-labelledby="sortButton">
          {/* <li><a className="dropdown-item" href="javascript:;">Mas Popular</a></li> */}
          {/* <li><a className="dropdown-item" href="javascript:;">Mejor Rating</a></li> */}
          <li><a className="dropdown-item" href="javascript:;">Mas Nuevo</a></li>
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

const AsideSearch:React.FC = ()=>(
  <input type="text" className="form-control" placeholder="Buscar" />
)

// type Category 

const AsidePrincipalCategoriesFilter:React.FC<{categories:string[]}> = ({categories})=>(
  <ul className="list-unstyled ms-3">
    {categories.map((categorie)=>
      <li key={categorie} className="mb-2"><a href="#">{categorie}</a></li>
    )}
  </ul>
) 

type AccordionItem = {categorie:string,subCategories:string[]}

const AsideAccordionItem:React.FC<AccordionItem> = ({categorie,subCategories})=>(
  <div className="accordion-item">
        <h5 className="accordion-header" id="headingThree">
          <button className="accordion-button border-bottom border-top font-weight-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target={`#${categorie}`} aria-expanded="false" aria-controls={categorie}>
            {categorie}
            <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
            <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
          </button>
        </h5>
        <div id={categorie} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionArrivals">
          <div className="accordion-body text-sm opacity-8">
            {subCategories.map((subCategorie,index)=>(
              <div key={index} className="form-check justify-content-start ">
                <input className="form-check-input me-2" type="checkbox" value={subCategorie} id={`${categorie}-${subCategorie}`} />
                <label className="custom-control-label mb-0">{subCategorie}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
)

const AsideAccordion:React.FC<{items:AccordionItem[]}> = ({items})=>(
  <div className="accordion" id="accordionArrivals">
    {items.map((item,index)=>(
      <Fragment key={index}>
        <AsideAccordionItem {...item}/>
      </Fragment>
    ))}
  </div>
)

const AsideFilter:React.FC = ()=>(
  <div className="col-12 col-md-2">
    <AsideSearch/>

    <hr />

    <AsidePrincipalCategoriesFilter categories={[]}/>
    <AsideAccordion items={[
      {
        categorie:'indumentaria',
        subCategories:[
          'trajes de lluvia',
        ]
      },
    ]}/>

  </div>
)



const ProductOverview:React.FC<Props> = ({title}) => {
  const exampleData = [
    {
      id: "0",
      thumg:{src:'https://capaspioneira.com.br/wp-content/uploads/2022/05/A0.jpg',alt:''},
      images: [{src:'https://capaspioneira.com.br/wp-content/uploads/2022/05/A0.jpg',alt:''},{src:'https://capaspioneira.com.br/wp-content/uploads/2022/05/A0.jpg',alt:''}],
      title: "CONJUNTO DE NYLON STORM",
      shortDescription: "Juego de nailon con la mejor relación calidad-precio.",
      largeDescription: 'La chaqueta tiene cierre de cremallera y velcro cubierto por solapa de drenaje, cuello alto, bolsillo interno con cremallera, regulador de velcro en puños, detalles de bies plateado (rosa para mujer), cinturón de ajuste en cintura (para mujer), bies reflectante + reflectante “P " en la espalda. El pantalón tiene cintura elástica y ajuste con cremallera con bies reflectante.',
      details: 'color: negro',      
      sizes:["EG", "HUEVO", "G", "GG", "M", "P", "PP", "XG", "XGG"],
    }
  ] as Data['products']; 


  const exampleProducts:Data['products'] = Array(7).fill(exampleData[0]);

  return (
    <>
      <div className="card card-product card-plain">
        <Header {...{title}}/>
        <div className="row mt-5">
          <AsideFilter/>

          <div className="col-12 col-md-10">
            <div className="d-flex h-100">
              <div className="row">
                {exampleProducts.map(product => 
                  <div className="col-md-6 col-lg-3">
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
