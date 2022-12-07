import React, { useState } from 'react';
import { Template } from '..';
import Button from '../../../../general/components/Button/Button';
import GetTableHeaderRow from '../../../../general/components/Table/GetTableHeaderRow';
import GetTableRow from '../../../../general/components/Table/GetTableRow';
import '../../../styles/EditParameterForm.css';
import JavaModal from '../modals/JavaModal';
import SpringModal from '../modals/SpringModal';

interface Props {
    template: Template,
}

function TemplateParameters({ template }: Props) {
  const [springModalActive, setSpringModalState] = useState(false);
  const [javaModalActive, setJavaModalState] = useState(false);

  return (
    <>
      <table className="table-default">
        <thead>
          {GetTableHeaderRow('Parameter', 'Value', 'Actions')}
        </thead>
        <tbody>
          {GetTableRow(
            'Spring Boot',
            template.springBootVersion,
            <Button label="Edit" onClick={() => setSpringModalState(true)} />,
          )}
          {GetTableRow(
            'Java',
            template.javaVersion,
            <Button label="Edit" onClick={() => setJavaModalState(true)} />,
          )}
        </tbody>
      </table>

      <SpringModal
        springModalActive={springModalActive}
        setSpringModalState={setSpringModalState}
        springBootVersions={template.springBootVersions}
      />

      <JavaModal
        javaModalActive={javaModalActive}
        setJavaModalState={setJavaModalState}
      />
    </>
  );
}

export default TemplateParameters;
