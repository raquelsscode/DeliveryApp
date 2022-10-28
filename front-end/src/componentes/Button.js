import React from 'react';

export default function Button(
  {
    textButton,
    dataTestId,
    onClick,
    // isDisabled,
  }
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