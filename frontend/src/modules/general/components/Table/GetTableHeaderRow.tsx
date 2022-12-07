import * as React from 'react';

function GetTableHeaderRow(...args: any[]) {
  const labelArr: any[] = Array.from(args);
  const rowElems = [];
  for (let i = 0; i < labelArr.length; i += 1) {
    rowElems.push(
      <th>{labelArr[i]}</th>,
    );
  }

  return (
    <tr>{rowElems}</tr>
  );
}

export default GetTableHeaderRow;
