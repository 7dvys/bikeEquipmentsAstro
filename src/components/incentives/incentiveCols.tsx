import whatsAppIcon from '../../../public/icons/whatsApp.svg'
import envelopeIcon from '../../../public/icons/envelope.svg'

const Card:React.FC<{title:string,iconSrc:string,iconAlt:string,cta:string,ctaText:string}> = ({title,iconAlt,iconSrc,cta,ctaText})=>(
  <div className="col-12 col-md-4">
          <div className="card shadow-xs border">
            <div className="card-body p-3 d-flex">
              <div className="icon icon-shape bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center">
                <img className='p-2' src={iconSrc} alt={iconAlt} />
              </div>
              <div className="ms-3">
                <h5 className="mb-0">{title}</h5>
                <a href={cta} className="mb-0 opacity-8" role="button" target="_blank">{ctaText}</a>

                {/* <p className="mb-0 opacity-8">Ezequiel: 113321234 - Alejandro: 1231234</p> */}
              </div>
            </div>
          </div>
        </div>
)

export default function incentiveCols() {
  const defaultMsg = (name:string)=>`Hola ${name}. Estoy interesado en conocer más sobre los repuestos y accesorios para motos que ofrecen en Bike Equipments. ¿Podrías proporcionarme más información?.`

  const sellers = [
    {mail:"arosende@bikeequipments.com",whatsApp:'+54 9 11 4176-3917',wame:"5491141763917"},
    {mail:"evarela@bikeequipments.com",whatsApp:'+54 9 11 6426-8833',wame:"5491164268833"}
]
  
  return (
    <>
     <div className="row mt-5">
        <Card
          title='Email'
          iconSrc={envelopeIcon.src}
          iconAlt='Envelope Icon'
          cta={`mailto:contacto@bikeequipments.com?subject=bike equipments qr&body=${encodeURI(defaultMsg('Bike Equipments'))}`}
          ctaText='contacto@bikeequipments.com'
        />

        <Card
          title='WhatsApp - Alejandro'
          iconSrc={whatsAppIcon.src}
          iconAlt='WhatsApp Icon'
          cta={`https://wa.me/${sellers[0].wame}?text=${encodeURI(defaultMsg('Alejandro'))}`}
          ctaText={sellers[0].whatsApp}
        />

        <Card
          title='WhatsApp - Ezequiel'
          iconSrc={whatsAppIcon.src}
          iconAlt='WhatsApp Icon'
          cta={`https://wa.me/${sellers[1].wame}?text=${encodeURI(defaultMsg('Ezequiel'))}`}
          ctaText={sellers[1].whatsApp}
        />

      </div>
    </>
  );
};