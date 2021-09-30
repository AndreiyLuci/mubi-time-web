import { SocialIcon } from "react-social-icons";
import logo from "../../assets/images/MusicInTown (2).gif";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <img src={logo} alt="logo" />

      <div>
        <p>Copyright 2021 Musicintown, LLC</p>
        <p>Terms of Use |Privacy Policy |Cookie Policy</p>
        <p>GDPR/CCPA Privacy Request |Manage Preferences</p>
      </div>
      <div>
        <ul className="footer-list">
          <li>
            <SocialIcon network="facebook" style={{ height: 35, width: 35 }} />
          </li>
          <li>
            <SocialIcon network="twitter" style={{ height: 35, width: 35 }} />
          </li>
          <li>
            <SocialIcon network="instagram" style={{ height: 35, width: 35 }} />
          </li>
          <li>
            <SocialIcon network="youtube" style={{ height: 35, width: 35 }} />
          </li>
          <li>
            <SocialIcon network="email" style={{ height: 35, width: 35 }} />
          </li>
          <li>
            <SocialIcon network="tiktok" style={{ height: 35, width: 35 }} />
          </li>
        </ul>
      </div>
    </div>
  );
}
