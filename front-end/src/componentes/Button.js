import React from 'react';
import { string, bool } from 'prop-types';

export default function Button(
  {
    textButton,
    dataTestId,
    // onClick,
    isDisabled,
  },
) {
  return (
    <button
      data-testid={ dataTestId }
      type="button"
      // onClick={ onClick }
      disabled={ isDisabled }
    >
      { textButton }
    </button>
  );
}

Button.defaultProps = {
  isDisabled: false,
};

Button.propTypes = {
  textButton: string.isRequired,
  dataTestId: string.isRequired,
  // onClick: func.isRequired,
  isDisabled: bool,
};
