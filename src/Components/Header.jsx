import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [btnState, SetBtnState] = useState(false);

  function handleClick() {
    SetBtnState((btnState) => !btnState);
  }

  let OnClick = btnState ? " active" : "";

  return (
    <>
      <div class="navber">
        <div class="row-left">
          <Link to="/">
            <img src="./images/logo.png" alt="" />
          </Link>
        </div>

        <div class={`row-right${OnClick}`}>
          <ul>
            <li>
              <Link to="/" class="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" class="active">
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" class="active">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/service" class="active">
                Service
              </Link>
            </li>
            <li>
              <Link to="/contact" class="active">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div class="mobile">
          <span>
            <button
              type="button"
              onClick={handleClick}
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <i class="fa-solid fa-bars"></i>
            </button>
            {/* <!-- <div class="sidebar-list"></div> --> */}
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
