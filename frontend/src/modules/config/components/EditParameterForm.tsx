import * as React from 'react';
import ButtonDelete from '../../general/components/Button/ButtonDelete';
import '../styles/EditParameterForm.css';

interface Props {
    labelArr: string[],
    onChanged: (params: any) => any;
    onDeleteSpringVersion: (params: any) => any;
}

function EditParameterForm({ labelArr, onChanged, onDeleteSpringVersion } : Props) {
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
            onChange={(e) => onChanged(e.currentTarget.value)}
          />
          {labelArr[i]}
        </label>
        <ButtonDelete onClick={() => { onDeleteSpringVersion(labelArr[i]); }} />
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
