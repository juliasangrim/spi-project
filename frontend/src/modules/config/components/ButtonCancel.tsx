import * as React from 'react';

function ButtonCancel(label: string, onClick: any) {
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
