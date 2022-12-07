import * as React from 'react';
import ButtonDelete from '../../general/components/Button/ButtonDelete';
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
      <div key={labelArr[i]} className="edit-parameter-form__form-elem">
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

  return (
    <form>
      <div className="edit-parameter-form">
        {formElements}
      </div>
    </form>
  );
}

export default EditParameterForm;
