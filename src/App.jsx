import React from 'react';
import './app.scss';
import Header from './Header/Header';
import Service from './Service/Service';

function App() {
  const serviceText = 'Rugged et tony stark mouthbrow furry facial friend, horseshoe furry facial friend mouthbrow rugged et tony stark timothy dalton che guevara, horseshoe man of the year 1986 furry facial friend che guevara tony stark circus strongman timothy dalton mouthbrow timothy dalton cunning like a fox arcu nefarious iron tache rugged et? ';

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
      </div>
    </div>
  );
}

export default App;
