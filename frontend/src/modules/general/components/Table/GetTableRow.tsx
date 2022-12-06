import * as React from 'react';

function GetTableRow(...args: any[]) {
  const labelArr: any[] = Array.from(args);
  const rowElems = [];
  for (let i = 0; i < labelArr.length; i += 1) {
    rowElems.push(
      <td>{labelArr[i]}</td>,
    );
  }

  return (
    <tr>{rowElems}</tr>
  );
}

export default GetTableRow;
