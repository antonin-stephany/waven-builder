import React from 'react';
//import PropTypes from 'prop-types';
import "./Responsive.scss";

function Responsive() {
  return (
    <div className="background-responsive">
     <div className="responsive-container">
            <h3>Site en construction...</h3>
            <p>Les versions tablettes et mobiles arriveront prochainement !</p>
        </div>
    </div>
  );
}
Responsive.propTypes = {

};

Responsive.defaultProps = {
};

export default React.memo(Responsive);