const qrContact: React.FC<{seller:number}> = ({seller}) => {
    const sellersName = ["Alejandro","Ezequiel"]

    const defaultMsg = `Hola ${sellersName[seller]}. Estoy interesado en conocer más sobre los repuestos y accesorios para motos que ofrecen en Bike Equipments. ¿Podrías proporcionarme más información?.`
    
    const sellers = [
        {mail:"arosende@bikeequipments.com",whatsApp:'+54 9 11 4176-3917',wame:"5491141763917"},
        {mail:"evarela@bikeequipments.com",whatsApp:'+54 9 11 6426-8833',wame:"5491164268833"}
    ]

    return (
        <div className="container" style={{minHeight:"70vh"}}>
            <div className="text-center mt-2">
                <img src="/logoBlack.svg" alt="image" width="100%" height="75px" />
                <h5 className="mt-2">Bike Equipments</h5>
                <p>Tu proveedor de repuestos y accesorios para motos. Explora nuestras novedades y enlaces para más información. ¡Gracias por tu visita!</p>
            </div>
            <div className="container mt-5 d-flex flex-column gap-2">
                <h3>Enlaces</h3>
                <a href={`https://wa.me/${sellers[seller].wame}?text=${encodeURI(defaultMsg)}`} className="btn btn-outline-dark btn-lg text-nowrap" role="button" target="_blank"><i className="fab fa-whatsapp">&nbsp;</i>{sellers[seller].whatsApp}</a>
                <a href={`mailto:${sellers[seller].mail}?subject=bike equipments qr&body=${encodeURI(defaultMsg)}`} className="btn btn-outline-dark btn-lg text-nowrap" role="button" target="_blank"><i className="fa-regular fa-envelope">&nbsp;</i>{sellers[seller].mail}</a>
                <a href="/landing#" target="_blank" className="btn btn-outline-dark btn-lg text-nowrap" role="button"><i className="fa-solid fa-store">&nbsp;</i>bikeequipments.com</a>
            </div>
            <div className="container my-5 d-flex flex-column gap-2">
                <h3>Novedades</h3>
                <a href="#" className="btn btn-outline-dark btn-lg" role="button" target="_blank">Pioneira - Trajes de lluvia</a>
            </div>
        </div>
    );
};

export default qrContact;
