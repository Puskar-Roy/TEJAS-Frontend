
import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuGridO, CgClose } from "react-icons/cg";

import "./Navbar.css";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header>
      <nav>
        <h2 className="brand">
          <Link className="link" to={"/"}>
            TEJAS.
          </Link>
        </h2>
        <ul className={mobile ? "navListActive" : "navList"}>
          <li className="navListItem">
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/package"}>
              About
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/package"}>
              FAQ
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/package"}>
              Github
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/package"}>
              Docs
            </Link>
          </li>
        </ul>
        <div
          className="icons"
          onClick={() => {
            setMobile(!mobile);
          }}
        >
          {mobile ? (
            <CgClose className="close" />
          ) : (
            <CgMenuGridO className="open" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;