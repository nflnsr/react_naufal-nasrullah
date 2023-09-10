import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import NavMenuBtn from "./NavMenuBtn";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-4 border-bottom">
      <div className="container-fluid">
        <NavLogo />
        <NavMenuBtn />
        <div
          id="navbarNav"
          className="collapse navbar-collapse justify-content-end"
        >
          <ul className="nav nav-pills justify-content-end flex-column flex-lg-row text-center mt-2 mt-lg-0">
            <NavLink
              textContext="Home"
              url="/"
              className="nav-link active"
              onClickEvent={undefined}
            />
            <NavLink
              textContext="Create Account"
              url="/createaccount"
              className="nav-link pe-none"
              onClickEvent={(event) => event.preventDefault()}
            />
            <NavLink
              textContext="Create Product"
              url="/createproduct"
              className="nav-link"
              onClickEvent={undefined}
            />
            <NavLink
              textContext="Pricing"
              url="/pricing"
              className="nav-link pe-none"
              onClickEvent={(event) => event.preventDefault()}
            />
            <NavLink
              textContext="Features"
              url="/features"
              className="nav-link pe-none"
              onClickEvent={(event) => event.preventDefault()}
            />
            <NavLink
              textContext="FAQs"
              url="/faqs"
              className="nav-link pe-none"
              onClickEvent={(event) => event.preventDefault()}
            />
            <NavLink
              textContext="About"
              url="/about"
              className="nav-link pe-none"
              onClickEvent={(event) => event.preventDefault()}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
