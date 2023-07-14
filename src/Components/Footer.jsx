import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-element-1">
          <img src="./images/logo_light.png" className="footer-logo" alt="" />
          <p className="footer-description">
            Soluta voluptate et optio. Eos quasi impedit <br />
            sapiente aliquid eius eligendi at. Necessitatibus
            <br />
            magni et sed quod quas minima.
          </p>
          <p className="footer-description">
            Soluta voluptate et optio. Eos quasi impedit <br />
            sapiente aliquid eius eligendi at. Necessitatibus
            <br />
            magni et sed quod quas minima.
          </p>
        </div>
        <div className="footer-element-2">
          <h5 className="footer-heading-1">Company</h5>
          <ul className="footer-company-division">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Gallery</Link>
            </li>
            <li>
              <Link to="">Service</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-element-2">
          <h5 className="footer-heading-1">Product</h5>
          <ul className="footer-company-division">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Gallery</Link>
            </li>
            <li>
              <Link to="">Service</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-element-2">
          <h5 className="footer-heading-1">Support</h5>
          <ul className="footer-company-division">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Gallery</Link>
            </li>
            <li>
              <Link to="">Service</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>
        {/* <!-- footer icon start --> */}
        <div className="footer-email-icon">
          <div className="footer-email">
            <input type="email" id="email" placeholder="Enter your email" />
            <button type="submit" className="btn-3">
              Start
            </button>
          </div>
          <div className="footer-icon">
            <Link to="/">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to="/">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link to="/">
              <i className="fa-brands fa-pinterest-p"></i>
            </Link>
            <Link to="/">
              <i className="fa-brands fa-google"></i>
            </Link>
            <Link to="/">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to="/">
              <i className="fa-solid fa-rss"></i>
            </Link>
            <Link to="/">
              <i className="fa-solid fa-globe"></i>
            </Link>
          </div>
        </div>
        {/* <!-- footer icon end --> */}
        {/* <!-- end to top "start"--> */}
        <div className="footer_icon_2">
          <Link to="/" className="social_icon">
            <i className="fa-solid fa-angles-up"></i>
          </Link>
        </div>
        {/* <!-- end to stop "end" --> */}
      </div>
    </>
  );
}

export default Footer;
