import React from 'react';
import PropTypes from 'prop-types';

function Dropdown({
  label,
  value,
  onChange,
  options,
  ...rest
}) {
  return (
    <label>
      {label}
      <select
        value={value}
        onChange={onChange}
        {...rest}
      >
        {options.map(({ label: optLabel, value: optValue, ...optRest }) => (
          <option
            key={optValue}
            value={optValue}
            {...optRest}
          >{optLabel || optValue}
          </option>
        ))}
      </select>
    </label>
  );
}
Dropdown.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string.isRequired,
    })).isRequired,
};

Dropdown.defaultProps = {
    label: '',
};

export default React.memo(Dropdown);