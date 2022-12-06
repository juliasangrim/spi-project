import React, { useState } from 'react';
import Button from '../../../../general/components/Button/Button';
import GetTableHeaderRow from '../../../../general/components/Table/GetTableHeaderRow';
import GetTableRow from '../../../../general/components/Table/GetTableRow';
import '../../../styles/EditParameterForm.css';
import JavaModal from '../modals/JavaModal';
import SpringModal from '../modals/SpringModal';

function TemplateParameters() {
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
            '3.0.0 (SNAPSHOT)',
            <Button label="Edit" onClick={() => setSpringModalState(true)} />,
          )}
          {GetTableRow(
            'Java',
            '11',
            <Button label="Edit" onClick={() => setJavaModalState(true)} />,
          )}
        </tbody>
      </table>

      <SpringModal
        springModalActive={springModalActive}
        setSpringModalState={setSpringModalState}
      />

      <JavaModal
        javaModalActive={javaModalActive}
        setJavaModalState={setJavaModalState}
      />
    </>
  );
}

export default TemplateParameters;
