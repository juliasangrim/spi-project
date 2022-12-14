import * as React from 'react';
import ButtonIcon from '../../../../assets/icons/delete-button.svg';

interface Props {
    onClick: () => void,
}

function ButtonDelete({ onClick }: Props) {
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
