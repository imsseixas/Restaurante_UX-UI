import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contate-nos</h1>
        <p className="p__opensans">Rua das Palmeiras, 123, Bairro da Praia, Salvador, Bahia</p>
        <p className="p__opensans">+55 071 999842209</p>
        <p className="p__opensans">+55 071 999842209</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;A melhor maneira de se encontrar é se perder a serviço dos outros.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt='Colher' />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Jornada de trabalho</h1>
        <p className="p__opensans">Segunda-feira - sexta-feira:</p>
        <p className="p__opensans">08h00 - 12h00</p>
        <p className="p__opensans">Sábado - domingo:</p>
        <p className="p__opensans">07:00 - 23:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. Todos os direitos reservados.</p>
    </div>

  </div>
);

export default Footer;