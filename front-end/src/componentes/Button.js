import React from 'react';
import { string, func } from 'prop-types';

export default function Button(
  {
    textButton,
    dataTestId,
    onClick,
    // isDisabled,
  },
) {
  return (
    <button
      data-testid={ dataTestId }
      type="button"
      onClick={ onClick }
      // disabled={ !loginIsValid() }
    >
      { textButton }
    </button>
  );
}

Button.propTypes = {
  textButton: string.isRequired,
  dataTestId: string.isRequired,
  onClick: func.isRequired,
};
