import React from 'react';
import Button from '../../../../general/components/Button/Button';
import Modal from '../../../../general/components/Modal/Modal';
import GetTableClickableRow from '../../../../general/components/Table/GetTableClickableRow';
import GetTableHeaderRow from '../../../../general/components/Table/GetTableHeaderRow';
import { Dependency } from '../TemplateDependencies';

interface Props{
    dependencies: Array<Dependency>,
    addDependencyModalActive: any;
    setAddDependencyModalState: any;
    setDependencyVersionsModalState: any;
}

function AddDependencyModal({
  dependencies,
  addDependencyModalActive,
  setAddDependencyModalState,
  setDependencyVersionsModalState,
}: Props) {
  const onTableRowClick = () => {
    setDependencyVersionsModalState(true);
    setAddDependencyModalState(false);
  };

  return (
    <Modal
      isActive={addDependencyModalActive}
      setModalState={setAddDependencyModalState}
    >
      <div className="edit-template__modal">
        <h3>Find dependencies</h3>
        <p>Dependency name:</p>
        <div className="edit-template__input-group">
          {/* TODO: Убрать атрибут value, он нужен только для примера */}
          <input
            className="edit-template__input"
            placeholder="Enter dependency name..."
            value="Spring Security"
          />
          <Button label="Search" onClick={() => {}} />
        </div>

        <table className="table-default">
          <thead>
            {GetTableHeaderRow('GroupID', 'ArtifactID', 'Latest version')}
          </thead>
          <tbody>
            {
               /* Заглушка: каждая строка открывает один и тот же Modal,
                * который изображен на макете
                */
              }
            {GetTableClickableRow(
              onTableRowClick,
              dependencies[0].groupId,
              dependencies[0].artId,
              dependencies[0].version,
            )}
            {GetTableClickableRow(
              onTableRowClick,
              dependencies[1].groupId,
              dependencies[1].artId,
              dependencies[1].version,
            )}
            {GetTableClickableRow(
              onTableRowClick,
              dependencies[2].groupId,
              dependencies[2].artId,
              dependencies[2].version,
            )}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}

export default AddDependencyModal;
