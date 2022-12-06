import * as React from 'react';

interface Props{
    label: string;
    onClick: any;
}

function Button({ label, onClick }: Props) {
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
