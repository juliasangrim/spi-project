import React, { useState } from 'react';
import { Template } from '..';
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

  interface Props {
    template: Template,
}

function TemplateDependencies({ template }: Props) {
  const [addDependencyModalActive, setAddDependencyModalState] = useState(false);
  const [dependencyVersionsModalActive, setDependencyVersionsModalState] = useState(false);

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
          {template.dependencies.map((dependency) => GetTableRow(
            dependency.groupId,
            dependency.artId,
            dependency.version,
            <ButtonDelete onClick={() => setAddDependencyModalState(true)} />,
          ))}
        </tbody>
      </table>
      {template.dependencies.length === 0 && <div className="dependency-table-empty">No dependencies</div>}

      <AddDependencyModal
        dependencies={template.dependencies}
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
