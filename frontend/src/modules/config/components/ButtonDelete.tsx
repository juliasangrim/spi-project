import * as React from 'react';
import ButtonIcon from '../../../assets/icons/delete-button.svg';

function ButtonDelete(onClick: any) {
  return (
    <button
      type="button"
      className="btn btn-delete"
      onClick={onClick}
    >
      <img src={ButtonIcon} alt="" />
    </button>
  );
}

export default ButtonDelete;
