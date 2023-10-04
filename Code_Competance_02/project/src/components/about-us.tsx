const AboutUs = () => {
  return (
    <section className="team-area">
      <h2 className="text-center fs-3">About Us</h2>
      <div className="container justify-content-center d-flex align-items-center ">
        <div className="row">
          <div className="col-lg-4 p-4 py-0 col-md-6">
            <div className="single-team text-center team-style-one p-4">
              <div className="team-image">
                <img src="assets/assets-4.png" alt="Team" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-4 py-0 col-md-6">
            <div className="single-team text-center team-style-one p-4">
              <div className="team-image">
                <img src="assets/assets-5.png" alt="Team" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-4 py-0 col-md-6">
            <div className="single-team text-center team-style-one p-4">
              <div className="team-image">
                <img src="assets/assets-6.png" alt="Team" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
