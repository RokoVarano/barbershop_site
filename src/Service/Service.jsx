import React from 'react';
import PropTypes from 'prop-types';

const Service = (props) => {
  const { title, text, price } = props;

  return (
    <fieldset className="service-box">
      <legend>{title}</legend>
      <div className="service-picture" />
      <h4>
        $
        {price}
      </h4>
      <p>{text}</p>
    </fieldset>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Service;
