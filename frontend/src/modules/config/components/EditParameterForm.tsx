import * as React from 'react';
import ButtonDelete from './ButtonDelete';
import '../styles/EditParameterForm.css';

interface Props {
    labelArr: string[],
    onSpringChanged: (version: any) => any;
    onDeleteSpringVersion: (version: any) => any;
}

function EditParameterForm({ labelArr, onSpringChanged, onDeleteSpringVersion } : Props) {
  const formElements = [];
  for (let i = 0; i < labelArr.length; i += 1) {
    formElements.push(
      <div key={labelArr[i]} className="edit-default-config__form-elem">
        <label htmlFor={labelArr[i]}>
          <input
            type="radio"
            id={labelArr[i]}
            value={labelArr[i]}
            name="version"
            onChange={(e) => onSpringChanged(e.currentTarget.value)}
          />
          {labelArr[i]}
        </label>
        {ButtonDelete(() => onDeleteSpringVersion(labelArr[i]))}
      </div>,
    );
  }

  /*  formElements.push(
    <div className="edit-default-config__form-elem">
      <label htmlFor="add-new-elem">
        <input
          type="radio"
          id="add-new-elem"
          value="add-new-elem"
          name="version"
        />
        <input className="edit-default-config__add-new-elem" />
      </label>
    </div>,
  ); */

  return (
    <form>
      <div className="edit-default-config__form">
        {formElements}
      </div>
    </form>
  );
}

export default EditParameterForm;
