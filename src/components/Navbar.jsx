import TitleLogo from '../images/TitleLogo.png'
import { pageLinks, socialLinks } from "../data";
import { useState } from "react";
export default function Navbar() {
  const [toggle, setToggle] = useState("false");
  const linkStyle = toggle ? "nav-links show-links" : "nav-links";
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
        <a href="home" className="navbar-heading">
        <img src={TitleLogo} className="nav-logo" alt="ctbc logo" />
        
      </a>
        <a href="home" class="navbar-heading" >CTBC</a>
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul id="nav-links" className={linkStyle}>
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}

          {/* <li>
            <a href="#home" className="nav-link">
              {" "}
              home{" "}
            </a>
          </li>

          <li>
            <a href="#about" className="nav-link">
              {" "}
              about{" "}
            </a>
          </li>

          <li>
            <a href="#services" className="nav-link">
              {" "}
              services{" "}
            </a>
          </li>

          <li>
            <a href="#tours" className="nav-link">
              {" "}
              tours
            </a>
          </li> */}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  className="nav-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}

          {/* 
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-squarespace"></i>
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
