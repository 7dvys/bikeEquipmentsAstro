import handStars from '../../../public/icons/hand-stars.svg';
import medal from '../../../public/icons/medal.svg';
import check from '../../../public/icons/check-circle.svg';

interface Props {
  // order: string;
}

export default function incentiveLarge({
  // order
}: Props) {

  return (
    <>
     <div>
        <h2>¿Por que elegirnos?</h2>
        <p className="pe-md-12 me-lg-12">Tu Socio en Motopartes: Más de 20 años de experiencia, una red sólida de contactos, asesoramiento personalizado y productos de alta calidad.</p>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <div className="card shadow-xs border p-3 p-md-4 mb-4 h-100">
              <div className='icon icon-shape border border-2 d-flex align-items-center justify-content-center mb-3'>

                <img src={medal.src} width={24}height={24} alt="" />
              </div>
              <h5>Precios Competitivos</h5>
              <p className="opacity-8">Garantizamos precios competitivos gracias a nuestras relaciones sólidas con proveedores y una gestión eficiente.</p>
            </div>
          </div>
          <div className="col-12 col-md-4 my-3 my-md-0">
            <div className="card shadow-xs border p-3 p-md-4 mb-4 h-100">
              <div className='icon icon-shape border border-2 d-flex align-items-center justify-content-center mb-3'>
              <img src={check.src} width={24}height={24} alt="" />

              </div>
              <h5>Variedad Completa</h5>
              <p className="opacity-8">Desde repuestos esenciales hasta accesorios de estilo, ofrecemos una amplia gama de motopartes y accesorios para satisfacer todas las necesidades.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card shadow-xs border p-3 p-md-4 mb-4 h-100">
              <div className='icon icon-shape border border-2 d-flex align-items-center justify-content-center mb-3'>
              {/* <div className="icon icon-shape border-4 border-solid border-indigo-500 text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3"> */}
              <img src={handStars.src} width={24}height={24} alt="" />
              </div>
              <h5>Garantía de Calidad</h5>
              <p className="opacity-8">Trabajamos con marcas reconocidas y verificamos cada producto para asegurar la calidad y durabilidad, brindando confianza a nuestros clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};