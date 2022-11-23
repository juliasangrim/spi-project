import * as React from 'react';
import ButtonCancel from './ButtonCancel';
import { Dependency, Version } from '../../../types/ApiTypes';

interface Props{
  dependencies: Dependency[];
  setDependencies: (dependencies: Dependency[]) => void;
}

function SetDependencyVersion({
  dependencies, setDependencies,
}: Props) {
  return (
    <div className="edit-default-config__modal">
      <h3>Find dependencies</h3>
      <p>io.easyspring.security:spring-security-authentication</p>
      <table className="edit-default-config__table">
        <thead>
          {GetTableHeaderRow('Version', 'Release date')}
        </thead>
        <tbody>
          {GetTableRow(versions[0].version, versions[0].releaseDate)}
          {GetTableRow(versions[1].version, versions[1].releaseDate)}
          {GetTableRow(versions[2].version, versions[2].releaseDate)}
        </tbody>
      </table>
      {ButtonCancel('Back', () => { setDependencyVersionsModalState(false); })}
    </div>
  );
}

export default SetDependencyVersion;