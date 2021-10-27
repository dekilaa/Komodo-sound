import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import "../styles/Footer.css";

function Footer() {

  const year = new Date().getFullYear()

  return (
    <div className="footer">
    
    <div className="socialMedia">
    <a href="https://www.instagram.com/komodo.sound.tech/">
        <InstagramIcon /> 
      </a>
      <a href="https://www.facebook.com/komodo.sound.tech/?hc_ref=ARSZGK_u98eEWuoa9ynyBv1ZdzyiL0jLih1VpEcpTCMySRlJFDcuVd0wUtWtsw8czsg&ref=nf_target&fref=tag&__tn__=kC-R">
        <FacebookIcon /> 
      </a>
        
      </div>
   
     <p> &copy; {year} Komodo sound tech </p>
    </div>
  );
}

export default Footer;
