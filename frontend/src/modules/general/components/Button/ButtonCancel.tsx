import * as React from 'react';

interface Props {
    label: string,
    onClick: any,
}

function ButtonCancel({ label, onClick } : Props) {
  return (
    <button
      type="button"
      className="btn btn-gray"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ButtonCancel;
