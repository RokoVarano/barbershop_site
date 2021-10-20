import React from 'react';

const Contact = () => (
  <footer className="footer-box">
    <ul className="footer-about">
      <li className="footer-item"><p>Metro Simon Bolivar</p></li>
      <li className="footer-item">
        <p className="footer-contactme">
          <i className="fab fa-whatsapp" />
          +56 9 5733 0734
        </p>
      </li>
      <li className="footer-item">
        <p className="footer-contactme">
          <i className="fab fa-facebook" />
          Facebook
        </p>
      </li>
      <li className="footer-item">
        <p className="footer-contactme">
          <i className="fab fa-instagram" />
          Instagram
        </p>
      </li>
    </ul>
    <div className="footer-map">Mapa Google</div>
  </footer>
);

export default Contact;
