import * as React from 'react';

function GetTableClickableRow(onClick: any, ...args: any[]) {
  const labelArr: any[] = Array.from(args);
  const rowElems = [];
  for (let i = 0; i < labelArr.length; i += 1) {
    rowElems.push(
      <td className="clickable">{labelArr[i]}</td>,
    );
  }

  return (
    <tr onClick={onClick}>{rowElems}</tr>
  );
}

export default GetTableClickableRow;
