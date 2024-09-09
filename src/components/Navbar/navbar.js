import logo from "../../img/logo.png";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is included
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is included

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navi">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
              <li className="nav-item">
                <a className="nav-link fs-5 link" aria-current="page" href="#">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
