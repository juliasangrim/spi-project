import React from 'react';
import Button from '../../../general/components/Button/Button';

function ExportForm() {
  return (
    <form>
      <label className="edit-template__label" htmlFor="project-name-label">
        Project name:
        <input
          className="edit-template__input"
          type="text"
          id="project-name-label"
          name="export-label"
          onChange={() => {}}
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
          onChange={() => {}}
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
          onChange={() => {}}
          placeholder="Enter prefix..."
        />
      </label>
      <div className="edit-template__form-footer">
        <Button label="Export" onClick={() => {}} />
      </div>
    </form>
  );
}

export default ExportForm;
