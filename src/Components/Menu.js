import { Link } from "react-router-dom";
import "../Assets/Styles/Menu.css";

function Menu() {
  return (
    <div id="container">
      <h2>Santiago</h2>
      <h2>Ruiz</h2>
      <div id="links">
        <Link to="About">About</Link>
        <Link to="industrial-design">Industrial Design</Link>
        <Link to="CGI">CGI</Link>
        <Link to="graphics">Graphics</Link>
      </div>
      <div id="contact">
        <p>Contact</p>
        <a href="https://www.instagram.com/ruizsantiago/" rel="noreferrer noopener" target="_blank" id="instagram">
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Menu;
