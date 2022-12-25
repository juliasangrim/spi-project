import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import API from '../../../general/Api';

import Button from '../../../general/components/Button/Button';
import ButtonCancel from '../../../general/components/Button/ButtonCancel';

import '../../styles/EditTemplate.css';
import '../../styles/Table.css';
import TemplateParameters from './TemplateParameters';
import TemplateDependencies from './TemplateDependencies';
import ExportForm from './ExportForm';
import Modal from '../../../general/components/Modal/Modal';
import { Dependency } from '../../../../types/ApiTypes';
import AlertInfo from "../../../general/components/Alert/AlertInfo";

export interface Template {
  availableVersions: Array<number>;
  dependencies: Array<Dependency>;
  description: string;
  id: number;
  javaVersion: number;
  springBootVersion: string;
  springBootVersions: Array<string>;
  title: string;
  type: string;
}

function EditTemplate() {
  const [exportModalActive, setExportModalState] = useState(false);
  const [template, setTemplate] = useState<Template>({
    availableVersions: [],
    dependencies: [],
    description: '',
    id: -1,
    javaVersion: 0,
    springBootVersion: '',
    springBootVersions: [],
    title: '',
    type: '',
  });
  const [isShowSavedChangesNotify, setIsShowSavedChangesNofity] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const templateId = searchParams.get('id');
    API.makeRequest({
      endpoint: `templates/${templateId}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((response: any) => {
        console.log(response.data);
        setTemplate(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const closeEdit = () => {
    navigate('/templates');
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const showSavedChangesAlertOnThreeSeconds = async () => {
    setIsShowSavedChangesNofity(true);
    await delay(3000);
    setIsShowSavedChangesNofity(false);
  };
  const hideAlert = () => {
    setIsShowSavedChangesNofity(false);
  };


  const handleSaveChanges = () => {
    const templateId = searchParams.get('id');
    API.makeRequest({
      endpoint: `templates/${templateId}`,
      body: template,
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((response: any) => {
        console.log(response.data);
        showSavedChangesAlertOnThreeSeconds();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="edit-template">
      <div className="edit-template__body">
        <h2>
          Edit template:
          {template.title}
        </h2>
        <TemplateParameters template={template} setTemplate={setTemplate} />

        <TemplateDependencies template={template} setTemplate={setTemplate} />

        <div className="edit-template__form-footer">
          <ButtonCancel label="Cancel" onClick={closeEdit} />
          <Button label="Save changes" onClick={handleSaveChanges} />
          <Button label="Export" onClick={() => setExportModalState(true)} />
        </div>

        <Modal
          isActive={exportModalActive}
          setModalState={setExportModalState}
        >
          <ExportForm templateId={template.id} templateType={template.type} />
        </Modal>
        {isShowSavedChangesNotify ? <AlertInfo text="Changes has applied successfully" hide={hideAlert} /> : null}
      </div>
    </div>
  );
}

export default EditTemplate;
