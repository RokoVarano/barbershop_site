import React from 'react';
import './app.scss';
import Contact from './Contacto/Contact';
import Header from './Header/Header';
import Presentation from './Presentation/Presentation';
import Service from './Service/Service';

function App() {
  const serviceText = 'Rugged et tony stark mouthbrow furry facial friend, horseshoe furry facial friend mouthbrow rugged et tony stark timothy dalton che guevara';

  return (
    <div className="App">
      <Header />
      <div className="spacer" />
      <div className="body-content">
        <ul className="service-list">
          <li>
            <Service title="corte" text={serviceText} price="4000" />
          </li>
          <li>
            <Service title="corte" text={serviceText} price="4000" />
          </li>
          <li>
            <Service title="corte" text={serviceText} price="4000" />
          </li>
          <li>
            <Service title="corte" text={serviceText} price="4000" />
          </li>
          <li>
            <Service title="corte" text={serviceText} price="4000" />
          </li>
          <li>
            <Service title="corte" text={serviceText} price="4000" />
          </li>
        </ul>
        <div className="spacer" />
        <Presentation />
        <div className="spacer" />
      </div>
      <Contact />
    </div>
  );
}

export default App;
