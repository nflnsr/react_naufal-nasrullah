const HeroSection = () => {
    return (
        <main>
        <section className="header-area header-one">
          <div className="header-content-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                  <div className="header-wrapper">
                    <div className="header-content">
                      <img style={{ width: "450px" }} src="assets/assets-7.png" alt="" />
                      <p className="text-lg">
                        Akselerator Talenta Teknologi dengan tujuan meningkatkan
                        karir serta taraf hidup anak muda Indonesia dengan sukses
                        berkarir di Industri Teknologi melalui pendidikan IT
                        berkualitas
                      </p>
                      <div className="header-btn rounded-buttons">
                        <a className="btn primary-btn-outline btn-lg" href="#contact">
                          DAFTAR SEKARANG
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="header-image d-none d-lg-block">
                    <div className="image">
                      <img src="assets/assets-1.png" alt="Header" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="contact" className="header-shape">
              <img
                src="https://cdn.ayroui.com/1.0/images/header/header-shape.svg"
                alt="shape"
              />
            </div>
          </div>
        </section>
  
       
      </main>    )
  }
  
  export default HeroSection