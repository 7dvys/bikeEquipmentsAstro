interface Props {
  title: string;
  full_description: string;
  cta: string;
  ctaText:string;
  pageHeaderBgVideo: string; // Cambiado de 'pageHeaderBgImg' a 'pageHeaderBgVideo'
  pageHeaderMinVh: string;
  pageHeaderRadius: string;
}

export default function TestimonialsFade({
  title,
  cta,
  ctaText,
  full_description,
  pageHeaderBgVideo, // Cambiado de 'pageHeaderBgImg' a 'pageHeaderBgVideo'
  pageHeaderMinVh,
  pageHeaderRadius,
}: Props) {

  const styles = {
    pageHeader: {
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius,
      position: 'relative', // Añadido para posicionar el video correctamente
    },
    video: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Ajusta el tamaño del video para cubrir todo el contenedor
      zIndex: -1, // Asegura que el video esté detrás del contenido
    },
    text: {
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)', // Agrega sombra al texto
    }
  } as const;

  return (
    <>
      <section className="mb-4">
        <div className="page-header py-5 py-md-0" style={styles.pageHeader}>
          <video autoPlay loop muted style={styles.video}>
            <source src={pageHeaderBgVideo} type="video/mp4" />
            {/* Añade aquí más <source> para otros formatos de video si es necesario */}
          </video>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-sm-9 text-center mx-auto">
                <h1 className="text-white mb-4">{title}</h1>
                <p className="lead text-white mb-sm-6 mb-4" style={styles.text}>{full_description}</p>
                <a href={cta} className="btn btn-white btn-lg">{ctaText}</a> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
