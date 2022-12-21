import React, {useEffect, useState} from 'react';
import {Template} from '..';
import Button from '../../../../general/components/Button/Button';
import ButtonDelete from '../../../../general/components/Button/ButtonDelete';
import GetTableHeaderRow from '../../../../general/components/Table/GetTableHeaderRow';
import GetTableRow from '../../../../general/components/Table/GetTableRow';
import AddDependencyModal from '../modals/AddDependencyModal';
import DependencyVersionModal from '../modals/DependencyVersionModal';
import {Dependency, Version, VersionType} from '../../../../../types/ApiTypes';
import API from '../../../../general/Api';

interface Props {
    template: Template,
    setTemplate: React.Dispatch<React.SetStateAction<Template>>,
  }

function TemplateDependencies({ template, setTemplate }: Props) {
  const [addDependencyModalActive, setAddDependencyModalState] = useState(false);
  const [dependencyVersionsModalActive, setDependencyVersionsModalState] = useState(false);
  const [chosenFoundDependency, setChosenFoundDependency] = useState<Dependency | null>(null);
  const [foundDependencyVersions, setFoundDependencyVersions] = useState<Version[]>([]);

  console.log(chosenFoundDependency);

  const getDependencyVersions = () => {
    console.log(chosenFoundDependency);
    if (chosenFoundDependency === null) return;
    API.makeRequest({
      endpoint: 'dependencies/spring/versions',
      method: 'POST',
      body: {
        groupId: chosenFoundDependency.groupId,
        artifactId: chosenFoundDependency.artifactId,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((response) => {
      console.log(response);
      if (response.data) {
        setFoundDependencyVersions(response.data);
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    console.log('use effect on versssss');
    getDependencyVersions();
  }, [chosenFoundDependency]);

  const onChooseDependencyVersion = (version: string | null, versionType: VersionType) => {
    if (!chosenFoundDependency) return;
    setChosenFoundDependency({
      ...chosenFoundDependency,
      version: version,
      versionType: versionType,
    });
    setTemplate({
      ...template,
      dependencies: [...template.dependencies, chosenFoundDependency],
    });
    setDependencyVersionsModalState(false);
  };

  const handleCancelVersionChoose = () => {
    setDependencyVersionsModalState(false);
    setAddDependencyModalState(true);
  };

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
            dependency.artifactId,
            dependency.version,
            <ButtonDelete onClick={() => setAddDependencyModalState(true)} />,
          ))}
        </tbody>
      </table>
      {template.dependencies.length === 0 && <div className="dependency-table-empty">No dependencies</div>}

      <AddDependencyModal
        addDependencyModalActive={addDependencyModalActive}
        setAddDependencyModalState={setAddDependencyModalState}
        setDependencyVersionsModalState={setDependencyVersionsModalState}
        setChosenFoundDependency={setChosenFoundDependency}
      />

      <DependencyVersionModal
        dependencyVersionsModalActive={dependencyVersionsModalActive}
        setDependencyVersionsModalState={setDependencyVersionsModalState}
        chosenFoundDependency={chosenFoundDependency}
        setChosenFoundDependency={setChosenFoundDependency}
        foundDependencyVersions={foundDependencyVersions}
        onChooseDependencyVersion={onChooseDependencyVersion}
        handleCancel={handleCancelVersionChoose}
      />
    </>
  );
}

export default TemplateDependencies;
