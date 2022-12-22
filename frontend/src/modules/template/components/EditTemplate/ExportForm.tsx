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

    API.downloadFileRequest({
      endpoint: `templates/${templateId}/export`,
      filename: 'template.zip',
      method: 'POST',
      body: {
        id: templateId,
        type: templateType,
        projectName: projectName || 'test-project',
        applicationName: applicationName || 'Test',
        packageName: packageName || 'ccfit.nsu.ru',
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
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
              e.target.value = e.target.value.trim();
              setProjectName(e.target.value);
            }}
            placeholder="test-project"
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
              e.target.value = e.target.value.trim();
              setPackageName(e.target.value);
            }}
            placeholder="ccfit.nsu.ru"
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
              e.target.value = e.target.value.trim();
              setApplicationName(e.target.value);
            }}
            placeholder="Test"
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
