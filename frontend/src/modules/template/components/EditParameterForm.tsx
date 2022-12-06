import * as React from 'react';
import ButtonDelete from '../../general/components/Button/ButtonDelete';
import '../styles/EditParameterForm.css';

interface Props {
    labelArr: string[],
    onChanged: (params: any) => any;
}

function EditParameterForm({ labelArr, onChanged } : Props) {
  return (
    <form>
      <div className="edit-parameter-form">
        {labelArr.map((label) => (
          <div key={label} className="edit-parameter-form__form-elem">
            <label htmlFor={label}>
              <input
                type="radio"
                id={label}
                value={label}
                name="version"
                onChange={(e) => onChanged(e.currentTarget.value)}
              />
              {label}
            </label>
          </div>
        ))}
      </div>
    </form>
  );
}

export default EditParameterForm;
