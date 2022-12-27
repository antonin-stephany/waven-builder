import React from 'react';
//import PropTypes from 'prop-types';
import Ring from '../Ring/Ring';
import Companion from '../Companion/Companion';
import Cuff from '../Cuff/Cuff';
import './Stuff.scss';

function Stuff() {
    return (
       <div className="stuff">
        <Ring />
        <Cuff />
        <Companion />
      </div>
      );
}
  
Stuff.propTypes = {
};

Stuff.defaultProps = {
};

export default React.memo(Stuff);