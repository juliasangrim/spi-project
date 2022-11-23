import * as React from 'react';

function Button(label: string, onClick: any) {
  return (
    <button
      type="button"
      className="btn btn-green"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
