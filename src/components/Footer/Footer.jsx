import { SocialIcon } from "react-social-icons";
import logo from "../../assets/images/_Cine Evento Logotipo Line.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <img src={logo} alt="logo" />

      <div>
        <p>Copyright 2021 MuBi Time, LLC</p>
        <p>Terms of Use |Privacy Policy |Cookie Policy</p>
        <p>GDPR/CCPA Privacy Request |Manage Preferences</p>
      </div>
      <div>
        <ul className="footer-list">
          <li>
            <SocialIcon network="facebook" style={{ height: 35, width: 35 }} bgColor="#545454"/>
          </li>
          <li>
            <SocialIcon network="twitter" style={{ height: 35, width: 35 }} bgColor="#545454"/>
          </li>
          <li>
            <SocialIcon network="instagram" style={{ height: 35, width: 35 }} bgColor="#545454" />
          </li>
          <li>
            <SocialIcon network="youtube" style={{ height: 35, width: 35 }} bgColor="#545454" />
          </li>
          <li>
            <SocialIcon network="email" style={{ height: 35, width: 35 }} bgColor="#545454"/>
          </li>
          <li>
            <SocialIcon network="tiktok" style={{ height: 35, width: 35 }} bgColor="#545454"/>
          </li>
        </ul>
      </div>
    </div>
  );
}
