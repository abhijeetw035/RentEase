import "../styles/Footer.scss";
import { LocationOn, LocalPhone, Email } from "@mui/icons-material";
import Logo from "../assets/Untitled.png";
import Payment from "../assets/payment.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Return and Refund Policy</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+1 234 567 890</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>rentease@support.com</p>
        </div>
        <img src={Payment} alt="payment" />
      </div>
    </div>
  );
};

export default Footer;
