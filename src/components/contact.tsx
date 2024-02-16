import IncentiveCols from '../components/incentives/incentiveCols';

const HeadlineBootstrap:React.FC = () => {
  return (
    <div className="mb-4 text-center container-md">
    <h2 className="fw-bold mb-4 fs-1">¡Bienvenido a Bike Equipments Argentina!</h2>
    <p className="mb-4 fs-4 text-muted">Gracias por considerar a Bike Equipments Argentina como tu proveedor de repuestos y accesorios para motos. ¡Esperamos colaborar contigo!</p>
  </div>
  );
};

const Form:React.FC = ()=>(
    <div className="container-sm mt-5 mb-8">
      <div className="row justify-content-center ">
        <div className="col-lg-7 col-md-8 col-sm-10 mx-auto ">
          <div className="rounded p-5 border border-gray-200 bg-white shadow ">
            
            <div className="mb-4">
              <label htmlFor="nombre" className="form-label fs-6">Nombre</label>
              <input type="text" name="nombre" id="nombre" className="form-control border-black" style={{ height: '55px' }} />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label fs-6">Email</label>
              <input type="email" name="email" id="email" className="form-control border-black" style={{ height: '55px' }} />
            </div>

            <div className="mb-4">
              <label htmlFor="mensaje" className="form-label fs-6">Mensaje</label>
              <textarea name="mensaje" id="mensaje" rows={4} className="form-control border-black" style={{ height: '150px' }}></textarea>
            </div>

            <div className="mb-4 form-check">
                <input
                    id="disclaimer"
                    name="disclaimer"
                    type="checkbox"
                    className="form-check-input"
                />
                <label htmlFor="disclaimer" className="form-check-label">Al enviar este formulario de contacto, reconoces y aceptas la recopilación de tu información personal.</label>
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-block btn-dark w-100 py-3">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
)

const ContactCards:React.FC = ()=>(
    <div className="mb-10">
    <h3 className="mt-5">Estamos aqui para ayudar!</h3>
    <IncentiveCols />
  </div>
)


const Contact = () => {
  return (
    <>
    <HeadlineBootstrap/>
    <Form/>
    <ContactCards/>
    </>

  );
};

export default Contact;
