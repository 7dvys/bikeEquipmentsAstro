import ProductFeatureImg from './productFeatureImg';
import ProductFeatureDetails from './productFeatureDetails';

interface Props {
  title: string;
  subTitle: string;
  images: ({
    src: string;
    alt: string;
  })[];
  full_description: string;
  productDescription: string;
  featuresDetails: {[key:string]:string};
}

export default function ProductOverview({
  title,
  subTitle,
  images,
  full_description,
  productDescription,
  featuresDetails,
}: Props) {

  const splicedImages = images.splice(0,3);

  return (
    <>
    <div className="card card-product card-plain">
      <div className="row">
        <div className="col-12 col-lg-7 mx-auto text-center">
          {(title.length != 0) && 
            <h2 className="mb-3">{title}</h2>
          }
          {(full_description.length != 0) && 
            <p className="mb-5">{full_description}</p>
          }
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-lg-6 pe-5">
          <div className="row">
            <h4 className="mb-3">{subTitle}</h4>
            <p className="mb-5">{productDescription}</p>
            <ProductFeatureDetails featuresDetails={featuresDetails} />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <ProductFeatureImg images={splicedImages}/>
        </div>
      </div>
    </div>
    </>
  );
};
