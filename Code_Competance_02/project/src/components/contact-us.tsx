import { FormEvent } from "react";

const ContactUs = () => {
  const patternPhoneNumber = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fullName = form.elements.namedItem("full-name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const phoneNumber = form.elements.namedItem("phone-number") as HTMLInputElement;
    const subject = form.elements.namedItem("subject") as HTMLInputElement;
    const message = form.elements.namedItem("message") as HTMLInputElement;

    if (!form.checkValidity()) {
      event.stopPropagation();
      alert("Please fill the form correctly!");
    } else if (!patternPhoneNumber.test(phoneNumber.value)) {
      event.stopPropagation();
      alert("Please fill phone number form correctly!");
    } else {
      phoneNumber.setCustomValidity("");
      alert(`
      Full Name: ${fullName.value}
      Email: ${email.value}
      Phone Number: ${phoneNumber.value}
      Subject: ${subject.value}
      Message: ${message.value}
    `);
    }
    form.classList.add("was-validated");
  };

  return (
    <section className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title mt-45">
              <h3 className="title">Get in touch</h3>
            </div>
            <div className="contact-form form-style-four mt-15">
              <form className="needs-validation" noValidate onSubmit={(e) => handleOnSubmit(e)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-input mt-15">
                      <label htmlFor="full-name">Full Name</label>
                      <div className="input-items default">
                        <i className="lni lni-user"></i>
                        <input
                          type="text"
                          name="full-name"
                          id="full-name"
                          className="form-control"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-input mt-15">
                      <label htmlFor="email">Email Address</label>
                      <div className="input-items default">
                        <i className="lni lni-envelope"></i>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="admin@gmail.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-input mt-15">
                      <label htmlFor="phone-number">Phone Number</label>
                      <div className="input-items default">
                        <i className="lni lni-phone"></i>
                        <input
                          type="number"
                          name="phone-number"
                          id="phone-number"
                          className="form-control"
                          placeholder="0123456789"
                          required
                          onChange={(e) => {
                            const input = e.target as HTMLInputElement;
                            if (input.value.length < 10 ) input.setCustomValidity("Please fill phone number form correctly!");
                            else input.setCustomValidity("");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-input mt-15">
                      <label htmlFor="subject">Subject</label>
                      <div className="input-items default">
                        <i className="lni lni-bubble"></i>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="form-control"
                          placeholder="Type here"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-input mt-15">
                      <label htmlFor="message">Your Message</label>
                      <div className="input-items default">
                        <i className="lni lni-pencil-alt"></i>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          placeholder="Type your message here"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-form mt-15">
                      <div className="input-form rounded-buttons">
                        <button className="btn primary-btn rounded-full" type="submit">
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-xl-1 mx-auto">
            <div className="d-flex justify-content-center mt-5">
              <img src="assets/assets-2.png" width="300px" alt="" />
            </div>
            <div className="d-flex justify-content-center mt-5">
              <img src="assets/assets-3.png" width="300px" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
