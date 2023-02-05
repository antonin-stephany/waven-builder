import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import './CuffSlot.scss';

function Cuff({openModal}) {
    const cuffs = useSelector((fullState) => fullState.stuff.cuff);
    return (
        <div className="stuff-cuff">
            {cuffs.map((cuff, i) => (
                <div
                key={i}
                className="stuff-cuff-slot"
                onClick={() => openModal("cuff", i)}
                >
                    {cuff.value !== "" && (
                      <>
                        <img src={`./assets/cuff/${cuff.value}.png`} />
                        <button
                            className="delete-item"
                        ></button>
                      </>
                    )}
                </div>
            ))}
        </div>
    );
}
  
Cuff.propTypes = {
    openModal: PropTypes.func.isRequired,
};

Cuff.defaultProps = {
};

export default React.memo(Cuff);