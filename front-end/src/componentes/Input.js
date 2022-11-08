import React from 'react';
import { string, func, number } from 'prop-types';

export default function Input(
  {
    name,
    dataTestId,
    type,
    value,
    onChange,
    placeholder,
    label,
  },
) {
  return (
    <label
      htmlFor={ name }
    >
      { label }
      <input
        id={ name }
        data-testid={ dataTestId }
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }
      />
    </label>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  name: string.isRequired,
  dataTestId: string.isRequired,
  onChange: func.isRequired,
  type: string.isRequired,
  value: string || number.isRequired,
  label: string.isRequired,
  placeholder: string.isRequired,
};
