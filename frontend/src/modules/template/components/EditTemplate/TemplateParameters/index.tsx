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
    setTemplate: React.Dispatch<React.SetStateAction<Template>>
}

function TemplateParameters({ template, setTemplate }: Props) {
  const [springModalActive, setSpringModalState] = useState(false);
  const [javaModalActive, setJavaModalState] = useState(false);
  const [javaVersionState, setJavaVersionState] = useState<number>(template.javaVersion);
  const [springBootVersionState, setSpringBootVersionState] = useState<string>(template.springBootVersion);

  const handleJavaVersionUpdate = () => {
      setTemplate({
          ...template,
          javaVersion: javaVersionState
      });
      setJavaModalState(false);
  };

    const handleSpringVersionUpdate = () => {
        setTemplate({
            ...template,
            springBootVersion: springBootVersionState
        });
        setSpringModalState(false);
    };

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

        <button onClick={() => console.log(template)}>Test</button>

      <SpringModal
        springModalActive={springModalActive}
        setSpringModalState={setSpringModalState}
        springBootVersions={template.springBootVersions}
        setSpringBootVersion={setSpringBootVersionState}
        handleSaveChanges={handleSpringVersionUpdate}
      />

      <JavaModal
        javaModalActive={javaModalActive}
        setJavaModalState={setJavaModalState}
        javaVersions={template.availableVersions}
        setJavaVersion={setJavaVersionState}
        handleSaveChanges={handleJavaVersionUpdate}
      />
    </>
  );
}

export default TemplateParameters;
