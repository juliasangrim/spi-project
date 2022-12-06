import React, { useState } from 'react';
import Button from '../../../../general/components/Button/Button';
import ButtonDelete from '../../../../general/components/Button/ButtonDelete';
import GetTableHeaderRow from '../../../../general/components/Table/GetTableHeaderRow';
import GetTableRow from '../../../../general/components/Table/GetTableRow';
import AddDependencyModal from '../modals/AddDependencyModal';
import DependencyVersionModal from '../modals/DependencyVersionModal';

export interface Dependency {
    groupId: string;
    artId: string;
    version: string;
  }

function TemplateDependencies() {
  const [addDependencyModalActive, setAddDependencyModalState] = useState(false);
  const [dependencyVersionsModalActive, setDependencyVersionsModalState] = useState(false);

  const dependencies: Dependency[] = [
    {
      groupId: 'io.easyspring.security',
      artId: 'spring-security-authentication',
      version: '1.1.0-RELEASE',
    },
    {
      groupId: 'io.easyspring.security',
      artId: 'easy-spring-security',
      version: '1.1.0-RELEASE',
    },
    {
      groupId: 'io.easyspring.security',
      artId: 'spring-security-authorize',
      version: '2.7.5',
    },
  ];

  return (
    <>
      <div className="dependency-table-title">
        <h3>Dependencies</h3>
        <Button label="Add dependencies" onClick={() => setAddDependencyModalState(true)} />
      </div>
      <table className="table-default">
        <thead>
          {GetTableHeaderRow('GroupID', 'ArtifactID', 'Latest version', 'Actions')}
        </thead>
        <tbody>
          {GetTableRow(
            dependencies[0].groupId,
            dependencies[0].artId,
            dependencies[0].version,
            <ButtonDelete onClick={() => setAddDependencyModalState(true)} />,
          )}
          {GetTableRow(
            dependencies[1].groupId,
            dependencies[1].artId,
            dependencies[1].version,
            <ButtonDelete onClick={() => setAddDependencyModalState(true)} />,
          )}
          {GetTableRow(
            dependencies[2].groupId,
            dependencies[2].artId,
            dependencies[2].version,
            <ButtonDelete onClick={() => setAddDependencyModalState(true)} />,
          )}
        </tbody>
      </table>

      <AddDependencyModal
        dependencies={dependencies}
        addDependencyModalActive={addDependencyModalActive}
        setAddDependencyModalState={setAddDependencyModalState}
        setDependencyVersionsModalState={setDependencyVersionsModalState}
      />
      <DependencyVersionModal
        dependencyVersionsModalActive={dependencyVersionsModalActive}
        setDependencyVersionsModalState={setDependencyVersionsModalState}
      />
    </>
  );
}

export default TemplateDependencies;
