import type { Product } from '../../../types/Data';
import ProductBadge from './productBadge';

interface Props extends Product{
  position?:string
}


export default function CardProduct({
  title,
  shortDescription,
  price,
  position,
  variants,
  
}: Props) {

  const classList = "card-body " + "text-" + position;

  return (
    <>
      <div className="card card-product border mb-5 shadow-xs border-radius-lg">
        <a href="#">
          <div className="height-350">
            <img className="w-100 h-100 p-4 rounded-top" src={`${variants[0].images[0].src}`} alt={variants[0].images[0].alt} />
          </div>
          <div className={classList}>

            {(title) && 
              <h4 className="font-weight-bold">
                {title}
              </h4>
            }

            {(shortDescription) && 
              <p className="text-body">{shortDescription}</p>
            }
  
            
            {(price) && 
              <h4 className="mb-0 text-lg mt-1 mb-3">
                ${price.toLocaleString()}
              </h4>
            }

            {
              <a href="#" className="font-weight-normal text-body text-sm">Shop Now</a>
            }
          </div>
        </a>
      </div>
    </>
  );
};
