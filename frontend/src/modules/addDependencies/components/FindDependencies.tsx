import * as React from 'react';
import GetTableClickableRow from './GetTableClickableRow';
import { Dependency, Version } from '../../../types/ApiTypes';

interface Props{
  dependencies: Dependency[];
  setDependencies: (dependencies: Dependency[]) => void;
}

function FindDependencies({
  dependencies, setDependencies,
}: Props) {
  const onTableRowClick = () => {
    setDependencyVersionsModalState(true);
    setAddDependencyModalState(false);
  };
  return (
    <div className="edit-default-config__modal">
    <h3>Find dependencies</h3>
    <p>Dependency name:</p>
    <div className="edit-default-config__input-group">
      {/* TODO: Убрать атрибут value, он нужен только для примера */}
      <input
        className="edit-default-config__input"
        placeholder="Enter dependency name..."
        value="Spring Security"
      />
      {Button('Search', () => {})}
    </div>

    <table className="edit-default-config__table">
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
          dependencies[0].artifactId,
          dependencies[0].version,
        )}
        {GetTableClickableRow(
          onTableRowClick,
          dependencies[1].groupId,
          dependencies[1].artifactId,
          dependencies[1].version,
        )}
        {GetTableClickableRow(
          onTableRowClick,
          dependencies[2].groupId,
          dependencies[2].artifactId,
          dependencies[2].version,
        )}
      </tbody>
    </table>
  </div>
  );
}

export default FindDependencies;