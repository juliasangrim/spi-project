import * as React from 'react';
import cancelButton from '../../../assets/icons/cancel-button.svg';
import '../styles/EditConfigForm.css';

function EditConfigForm({ labelArr }:{labelArr: string[]}) {
  const formElements = [];
  for (let i = 0; i < labelArr.length; i += 1) {
    formElements.push(
      <div className="edit-config__form-elem">
        <label htmlFor={labelArr[i]}>
          <input
            type="radio"
            id={labelArr[i]}
            value={labelArr[i]}
            name="version"
          />
          {labelArr[i]}
        </label>
        <button type="button" className="btn btn-delete">
          <img
            src={cancelButton}
            alt=""
          />
        </button>
      </div>,
    );
  }

  formElements.push(
    <div className="edit-config__form-elem">
      <label htmlFor="add-new-elem">
        <input
          type="radio"
          id="add-new-elem"
          value="add-new-elem"
          name="version"
        />
        <input className="edit-config__add-new-elem" />
      </label>
    </div>,
  );

  return (
    <form>
      <div className="edit-config__form">
        {formElements}
      </div>
    </form>
  );
}

export default EditConfigForm;
