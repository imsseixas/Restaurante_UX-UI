import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Boletim informativo" />
      <h1 className="headtext__cormorant">Assine o nosso boletim informativo</h1>
      <p className="p__opensans">E nunca perca as últimas atualizações!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Seu melhor e-mail" />
      <button type="button" className="custom__button">Se inscrever</button>
    </div>
  </div>
);

export default Newsletter;