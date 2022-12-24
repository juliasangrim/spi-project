import React, { useState } from 'react';
import { Template } from '..';
import Button from '../../../../general/components/Button/Button';
import ButtonDelete from '../../../../general/components/Button/ButtonDelete';
import GetTableHeaderRow from '../../../../general/components/Table/GetTableHeaderRow';
import GetTableRow from '../../../../general/components/Table/GetTableRow';
import {Dependency} from '../../../../../types/ApiTypes';
import AddDependencies from "../../../../addDependencies/components/AddDependencies";
import Modal from "../../../../general/components/Modal/Modal";

interface Props {
    template: Template,
    setTemplate: React.Dispatch<React.SetStateAction<Template>>,
  }

function TemplateDependencies({ template, setTemplate }: Props) {
  const [addDependencyModalActive, setAddDependencyModalState] = useState(false);

  const handleDeleteAddedDependency = (removedDependency: Dependency) => {
    const updatedDependencyList = template.dependencies.filter((dependency) => dependency !== removedDependency);
    setTemplate({
      ...template,
      dependencies: updatedDependencyList,
    });
  };

  return (
    <>
      <div className="dependency-table-title">
        <h3>Dependencies</h3>
        <Button label="Add dependencies" onClick={() => setAddDependencyModalState(true)} />
      </div>
      <table className="table-default">
        <thead>
          {GetTableHeaderRow('GroupID', 'ArtifactID', 'Version', 'Actions')}
        </thead>
        <tbody>
          {template.dependencies.map((dependency) => GetTableRow(
            dependency.groupId,
            dependency.artifactId,
            dependency.version,
            <ButtonDelete onClick={() => handleDeleteAddedDependency(dependency)} />,
          ))}
        </tbody>
      </table>
      {template.dependencies.length === 0 && <div className="dependency-table-empty">No dependencies</div>}

      <Modal
          isActive={addDependencyModalActive}
          setModalState={setAddDependencyModalState}
      >
        <AddDependencies
            dependencies={template.dependencies}
            setDependencies={(newDeps) => setTemplate({ ...template, dependencies: newDeps })}
            setModalState={setAddDependencyModalState}
        />
      </Modal>
    </>
  );
}

export default TemplateDependencies;
