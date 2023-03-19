import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SingleItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetItem } from '../../actions/stuffActions';

function SingleItem({
  value,
  description,
  rare,
  stats,
  gifts,
  index,
  errorMessage,
  type,
  label,
  element,
  cost,
}) {
  const stuff = useSelector((fullState) => fullState.allBuilds.stuff);
  const dispatch = useDispatch();
  function addItem() {
    const testSameItem = stuff[type].find((item) => item.value === value);
    if (testSameItem !== undefined) {
      errorMessage('Vous avez déjà choisi cet équipement', 'red');
      return;
    }
    //trouver un emplacememt de libre pour l'anneau
    const indexEmptySlot = stuff[type].findIndex((e) => e.value === '');
    // si l'emplacement cliqué et occupé mais qu'il reste de la place ailleurs -> placer le ailleurs. Sinon placer le à l'emplacement cliqué
    if (indexEmptySlot !== -1 && stuff[type][index].value !== '') {
      index = indexEmptySlot;
      dispatch(actionSetItem({ value, index, type }));
    } else {
      dispatch(actionSetItem({ value, index, type }));
    }
  }
  const [tab, setTab] = useState(1);
  const toggleTab = (event, index) => {
    event.stopPropagation();
    setTab(index);
  };
  return (
    <div className="item" onClick={addItem}>
      {type === 'companion' ? (
        <div className="companion-img">
          <img src={`./assets/${type}/${value}.png`} />
          <div className="companion-img-cost">
            <img src={`./assets/companion/assets/${element}.png`} />
            <img src={`./assets/companion/assets/${cost}.png`} />
          </div>
        </div>
      ) : (
        <img src={`./assets/${type}/${value}.png`} />
      )}
      <div className="item-content">
        <div className="item-content-title">
          <h2>{label}</h2>
          <span>{rare}</span>
        </div>
        <p>{description}</p>
        <div className="item-content-container-carac">
          <div className="item-content-container-carac-tabs">
            <h4
              className={tab === 1 ? 'active-tab' : 'tab'}
              onClick={(event) => toggleTab(event, 1)}
            >
              Statistiques
            </h4>
            <h4
              className={tab === 2 ? 'active-tab' : 'tab'}
              onClick={(event) => toggleTab(event, 2)}
            >
              Dons
            </h4>
          </div>
          <div className={tab === 1 ? 'content active-content' : 'content'}>
            {stats.map((stat) => (
              <div key={stat.description}>
                {stat.value ? (
                  type === 'companion' ? (
                    <p>
                      -{stat.value} {stat.description}
                    </p>
                  ) : (
                    <p>
                      -{stat.value}% {stat.description}
                    </p>
                  )
                ) : (
                  <p>-{stat.description}</p>
                )}
              </div>
            ))}
          </div>
          <div className={tab === 2 ? 'content active-content' : 'content'}>
            {gifts.map((gift) => (
              <div key={gift.description}>
                {gift.value ? (
                  <p>
                    -{gift.value}% {gift.description}
                  </p>
                ) : (
                  <p>-{gift.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

SingleItem.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rare: PropTypes.string.isRequired,
  element: PropTypes.string,
  cost: PropTypes.number,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  gifts: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
  errorMessage: PropTypes.func.isRequired,
};

SingleItem.defaultProps = {};

export default React.memo(SingleItem);
