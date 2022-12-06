import * as React from 'react';

import Button from '../../../general/components/Button/Button';
import ButtonCancel from '../../../general/components/Button/ButtonCancel';
import GetTableClickableRow from '../../../general/components/Table/GetTableClickableRow';
import GetTableHeaderRow from '../../../general/components/Table/GetTableHeaderRow';
import GetTableRow from '../../../general/components/Table/GetTableRow';
import Modal from '../../../general/components/Modal/Modal';

import '../../styles/EditTemplate.css';
import '../../styles/Table.css';
import TemplateParameters from './TemplateParameters';
import TemplateDependencies from './TemplateDependencies';

function EditTemplate() {
  return (
    <div className="edit-template">
      <div className="edit-template__body">
        <h2>Edit template Pattern #1</h2>
        <TemplateParameters />

        <TemplateDependencies />

        <div className="edit-template__form-footer">
          <ButtonCancel label="Cancel" onClick={() => {}} />
          <Button label="Save changes" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default EditTemplate;
