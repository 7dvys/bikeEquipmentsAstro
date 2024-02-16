export default function Footer() {
  return (
    <>
      <footer className="footer pt-3 mb-4">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              Copyright ©{" "}
              <script>document.write(new Date().getFullYear())</script>
              &nbsp;
              <a
                href="https://www.bikeequipments.com"
                className="text-dark ms-1"
                target="_blank"
              >
                Bike Equipments Argentina
              </a>
              .
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a
                  href="https://www.bikeequipments.com/contacto"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  Contactanos
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.bikeequipments.com/presentation"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  Sobre nosotros
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  href="https://www.creative-tim.com/blog"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  Blog
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  href="https://www.bikeequipments.com/#"
                  className="disabled nav-link text-sm pe-0 text-muted"
                  target="_blank"
                >
                  Terminos y condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}


