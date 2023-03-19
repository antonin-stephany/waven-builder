import React from 'react';
import PropTypes from 'prop-types';
import './SlotItem.scss';
import { useSelector, useDispatch } from 'react-redux';
import { actionDeleteItem } from '../../actions/stuffActions';

function SlotItem({ openModal, type }) {
  const dispatch = useDispatch();
  const stuff = useSelector((fullState) => fullState.allBuilds.stuff);
  function deleteItem(event, index, type) {
    event.stopPropagation();
    dispatch(actionDeleteItem({ index, type }));
  }
  return (
    <div className={`stuff-${type}`}>
      {stuff[type].map((item, i) => (
        <div
          key={i}
          className={`stuff-${type}-slot`}
          onClick={() => openModal(type, i)}
        >
          {!!item.value && (
            <>
              <img src={`./assets/${type}/${item.value}.png`} />
              <button
                onClick={(event) => {
                  deleteItem(event, i, type);
                }}
                className="delete-item"
              ></button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

SlotItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

SlotItem.defaultProps = {};

export default React.memo(SlotItem);
