const Footer = () => {
  return (
    <footer className="footer-area footer-one">
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-sm-12">
              <div className="f-about">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="assets/logo.png" alt="Logo" width="160px" />
                  </a>
                </div>
                <p className="text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div className="footer-app-store">
                <h5 className="download-title">Download Our App Now!</h5>
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <img src="https://cdn.ayroui.com/1.0/images/footer/app-store.svg" alt="app" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://cdn.ayroui.com/1.0/images/footer/play-store.svg"
                        alt="play"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-4">
              <div className="footer-link">
                <h6 className="footer-title">Company</h6>
                <ul>
                  <li>
                    <a href="javascript:void(0)">About</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Contact</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Marketing</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Awards</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
              <div className="footer-link">
                <h6 className="footer-title">Services</h6>
                <ul>
                  <li>
                    <a href="javascript:void(0)">Products</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Business</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Developer</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Insights</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
              <div className="footer-contact">
                <h6 className="footer-title">Help & Suuport</h6>
                <ul>
                  <li>
                    <i className="lni lni-map-marker"></i>
                    Jalan Raya Tidar, Nomor 23, Karangbesuki, Kota Malang, Jawa Timur. 65146.
                  </li>
                  <li>
                    <i className="lni lni-phone-set"></i>
                  </li>
                  <li>
                    <i className="lni lni-envelope"></i> hiALTA@alterra.id
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright text-center d-md-flex justify-content-between align-items-center">
                <p className="text">© Made by Naufal Nasrullah with React, TypeScript, Bootstrap, and UI Components</p>
                <ul className="social">
                  <li>
                    <a
                      target="_blank"
                      href="https://api.whatsapp.com/send/?phone=6282293105626&text=You+can+call+me+Naufal/Fal+&type=phone_number&app_absent=0"
                    >
                      <i className="lni lni-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.instagram.com/_naufalnasrullah/">
                      <i className="lni lni-instagram-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.linkedin.com/in/naufalnn/">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://web.telegram.org/k/#@OverWorkedYesterday">
                      <i className="lni lni-telegram-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
