import "@/assets/css/LandingPage.css";
import heroImage from "@/assets/decoration/hero-img.png";

const Home = () => {
  return (
    <div>
      <main>
        <section className="hero__section">
          <div>
            <div className="container__hero__1">
              <h1>Better Solutions For Your Business</h1>
              <h5>We are team of talented designers making websites with Bootstrap</h5>
              <div>
                <a>
                  <button id="btn-1">Get Started</button>
                </a>
                <a>
                  <button id="btn-2">Watch Video</button>
                </a>
              </div>
            </div>
            <div className="container__hero__2">
              <div>
                <img className="pict-1" src={heroImage} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="contact__section">
          <div>
            <h2>Join Our Newsletter</h2>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="">
              <input className="newsletter-input" type="text" id="subscribe" name="subscribe" />
              <button type="submit" id="btn-3">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <section className="footer__section__1">
          <div>
            <div className="container__footer__1">
              <div>
                <h1>ARSHA</h1>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022 United States <br />
                </p>
                <p>
                  <strong>Phone:</strong> +1 5589 55488 55 <br />
                  <strong>Email:</strong> info@example.com
                </p>
              </div>
            </div>
            <div className="container__footer__2">
              <div>
                <h2>Useful Links</h2>
                <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Services</li>
                  <li>Term of service</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>
            <div className="container__footer__3">
              <div>
                <h2>Our Services</h2>
                <ul>
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>Product Management</li>
                  <li>Marketing</li>
                  <li>Graphic Design</li>
                </ul>
              </div>
            </div>
            <div className="container__footer__4">
              <div>
                <h2>Our Social Networks</h2>
                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer__section__2">
          <div style={{height: "18px"}}>
            <p>
              © Copyright <strong>Arsha.</strong> All Rights Reserved
            </p>
          </div>
          <div style={{height: "18px"}}>
            <p>
              Designed by <span>BootstrapMade</span>
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
};
export default Home;
