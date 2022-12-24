import React from 'react';
import Button from '../../../../general/components/Button/Button';
import ButtonCancel from '../../../../general/components/Button/ButtonCancel';
import Modal from '../../../../general/components/Modal/Modal';
import GetTableHeaderRow from '../../../../general/components/Table/GetTableHeaderRow';
import { Dependency, Version, VersionType } from '../../../../../types/ApiTypes';
import GetTableClickableRow from '../../../../general/components/Table/GetTableClickableRow';

interface Props {
    dependencyVersionsModalActive: boolean,
    setDependencyVersionsModalState: any,
    chosenFoundDependency: Dependency | null,
    setChosenFoundDependency: React.Dispatch<React.SetStateAction<Dependency | null>>;
    foundDependencyVersions: Version[];

    onChooseDependencyVersion: (version: string | null, versionType: VersionType) => void;
    handleCancel: () => void;
}

function DependencyVersionModal({
  dependencyVersionsModalActive,
  setDependencyVersionsModalState,
  chosenFoundDependency,
  setChosenFoundDependency,
  foundDependencyVersions,
  onChooseDependencyVersion,
  handleCancel,
}: Props) {


  return (
    <Modal
      isActive={dependencyVersionsModalActive}
      setModalState={setDependencyVersionsModalState}
    >
      <div className="edit-template__modal">
        <h3>Find dependencies</h3>
        {
          chosenFoundDependency === null ? null : <p>{chosenFoundDependency.groupId}</p>
        }
        <table className="table-default">
          <thead>
            {GetTableHeaderRow('Version', 'Release date')}
          </thead>
          <tbody>
            {
                foundDependencyVersions.map((entity) => (GetTableClickableRow(
                  () => onChooseDependencyVersion(entity.version, VersionType.COMMON),
                  entity.version,
                  entity.releaseDate,
                )))
            }
          </tbody>
        </table>
        <div className="button-group-container">
          <ButtonCancel
            label="Back"
            onClick={handleCancel}
          />
          <div className="button-group">
            <Button
              label="No version"
              onClick={() => onChooseDependencyVersion('', VersionType.INHERITED)}
            />
            <Button
              label="Latest version"
              onClick={() => onChooseDependencyVersion('+', VersionType.LATEST)}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default DependencyVersionModal;
