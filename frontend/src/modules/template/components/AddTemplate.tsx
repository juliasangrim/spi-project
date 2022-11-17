import * as React from 'react';
import { ITemplate } from '../../../types/ApiTypes';

function AddTemplate() {
  const [formData, setFormData] = React.useState<ITemplate | {}>();

  return (
  /*
   * Add the UI here
   */
    <div className="sign-in-form">
      <div className="sign-in-form__container">
        <p className="sign-in-form__title">Create Template</p>
        <form className="sign-in-form__input-container">
          Your UI
        </form>
      </div>
    </div>
  );
}

export default AddTemplate;
