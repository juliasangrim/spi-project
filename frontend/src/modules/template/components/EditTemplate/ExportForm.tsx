import React, { useState } from 'react';
import Button from '../../../general/components/Button/Button';
import API from '../../../general/Api';

interface Props {
  templateId: number;
  templateType: string;
}

function ExportForm({
  templateId, templateType,
}: Props) {
  const [projectName, setProjectName] = useState('');
  const [packageName, setPackageName] = useState('');
  const [applicationName, setApplicationName] = useState('');

  const onExport = (e: any) => {
    e.preventDefault();

    API.makeRequest({
      endpoint: `templates/${templateId}/export`,
      method: 'POST',
      body: {
        id: templateId,
        type: templateType,
        projectName: 'test-project', // test-project
        applicationName: 'Test', // Test Префикс названия класса с аннотацией SpringBootApplication
        packageName: 'ccfit.nsu.ru', // ccfit.nsu.ru
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="edit-template__modal">
      <h3>Export template</h3>
      <form>
        <label className="edit-template__label" htmlFor="project-name-label">
          Project name:
          <input
            className="edit-template__input"
            type="text"
            id="project-name-label"
            name="export-label"
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
            placeholder="Enter project name..."
          />
        </label>
        <label className="edit-template__label" htmlFor="name-prefix-label">
          Package name:
          <input
            className="edit-template__input"
            type="text"
            id="name-prefix-label"
            name="export-label"
            onChange={(e) => {
              setPackageName(e.target.value);
            }}
            placeholder="Enter package name..."
          />
        </label>
        <label className="edit-template__label" htmlFor="name-prefix-label">
          Project Class name prefix with SpringBootApplication annotation:
          <input
            className="edit-template__input"
            type="text"
            id="name-prefix-label"
            name="export-label"
            onChange={(e) => {
              setApplicationName(e.target.value);
            }}
            placeholder="Enter prefix..."
          />
        </label>
        <div className="edit-template__form-footer">
          <Button label="Export" onClick={onExport} />
        </div>
      </form>
    </div>
  );
}

export default ExportForm;
