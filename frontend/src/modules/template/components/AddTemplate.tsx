import React, { useState } from 'react';
import API from '../../general/Api';
import '../styles/AddTemplate.css';
import '../styles/Button.css';

interface Props {
    setModalState: (active: boolean) => void,
}

function AddTemplate({ setModalState }: Props) {
  const [templateName, setTemplateName] = useState('');
  const [templateType, setTemplateType] = useState('Spring');
  const [templateDescription, setTemplateDescription] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    API.makeRequest({
      endpoint: 'templates',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: {
        type: templateType.toUpperCase(),
        title: templateName,
        description: templateDescription,
      },
    }).catch((err) => {
      console.log(err);
    });

    setModalState(false);
  };

  return (
    <form className="add-new-template-form__wrapper" onSubmit={handleSubmit}>
      <div className="add-new-template-form__title">Add new template</div>
      <div className="add-new-template-form__input">
        <div className="add-new-template-form__label">Template name</div>
        <input
          className="add-new-template-form__input-field"
          type="text"
          placeholder="Enter template name..."
          name="template-name"
          id="template-name"
          value={templateName}
          onChange={(e) => {
            setTemplateName(e.target.value);
          }}
        />
      </div>

      <div className="add-new-template-form__input">
        <div className="add-new-template-form__label">Template name</div>
        <select
          name="platform"
          className="add-new-template-form__input-field"
          onChange={(e) => {
            setTemplateType(e.target.value);
          }}
        >
          <option value="spring">Spring</option>
        </select>
      </div>

      <div className="add-new-template-form__input">
        <div className="add-new-template-form__label">Template name</div>
        <textarea
          className="add-new-template-form__textarea"
          placeholder="Enter description..."
          name="template-name"
          value={templateDescription}
          onChange={(e) => {
            setTemplateDescription(e.target.value);
          }}
        />
      </div>

      <div className="add-new-template-form__buttons">
        <button
          className="btn btn-green add-new-template-form__button"
          type="submit"
        >
          Save Changes
        </button>
        <button
          className="btn btn-gray add-new-template-form__button"
          type="button"
          onClick={() => { setModalState(false); }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddTemplate;
