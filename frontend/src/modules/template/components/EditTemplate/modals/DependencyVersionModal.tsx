import React from 'react';
import Button from '../../../../general/components/Button/Button';
import ButtonCancel from '../../../../general/components/Button/ButtonCancel';
import Modal from '../../../../general/components/Modal/Modal';
import GetTableHeaderRow from '../../../../general/components/Table/GetTableHeaderRow';
import GetTableRow from '../../../../general/components/Table/GetTableRow';

interface Props{
    dependencyVersionsModalActive: boolean,
    setDependencyVersionsModalState: any
}

interface Version {
    version: string;
    releaseDate: string;
  }

function DependencyVersionModal({
  dependencyVersionsModalActive,
  setDependencyVersionsModalState,
}: Props) {
  const versions: Version[] = [
    { version: '1.1.0-RELEASE', releaseDate: '25 Jan 2021' },
    { version: '1.0.1-RELEASE', releaseDate: '14 Jan 2021' },
    { version: '1.0.0-RELEASE', releaseDate: '10 Dec 2020' },
  ];

  return (
    <Modal
      isActive={dependencyVersionsModalActive}
      setModalState={setDependencyVersionsModalState}
    >
      <div className="edit-template__modal">
        <h3>Find dependencies</h3>
        <p>io.easyspring.security:spring-security-authentication</p>
        <table className="table-default">
          <thead>
            {GetTableHeaderRow('Version', 'Release date')}
          </thead>
          <tbody>
            {GetTableRow(versions[0].version, versions[0].releaseDate)}
            {GetTableRow(versions[1].version, versions[1].releaseDate)}
            {GetTableRow(versions[2].version, versions[2].releaseDate)}
          </tbody>
        </table>
        <div className="button-group-container">
          <ButtonCancel label="Back" onClick={() => { setDependencyVersionsModalState(false); }} />
          <div className="button-group">
            <Button label="No version" onClick={() => {}} />
            <Button label="Latest version" onClick={() => {}} />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default DependencyVersionModal;
