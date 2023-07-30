import hills from "../assets/images/pattern-hills.svg";
import fbIcon from "../assets/images/icon-facebook.svg";
import ptIcon from "../assets/images/icon-pinterest.svg";
import igIcon from "../assets/images/icon-instagram.svg";

function Footer() {
  return (
    <footer style={{ backgroundImage: `url(${hills})` }}>
      <div>
        <img className="icon" src={fbIcon} />
        <img className="icon" src={ptIcon} />
        <img className="icon" src={igIcon} />
      </div>
    </footer>
  );
}

export default Footer;
