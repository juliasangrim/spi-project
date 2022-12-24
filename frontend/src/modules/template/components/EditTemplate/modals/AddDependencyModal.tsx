import React, { useState } from 'react';
import Button from '../../../../general/components/Button/Button';
import Modal from '../../../../general/components/Modal/Modal';
import GetTableClickableRow from '../../../../general/components/Table/GetTableClickableRow';
import GetTableHeaderRow from '../../../../general/components/Table/GetTableHeaderRow';
import { Dependency } from '../../../../../types/ApiTypes';
import API from '../../../../general/Api';

interface Props {
    addDependencyModalActive: any;
    setAddDependencyModalState: any;
    setDependencyVersionsModalState: any;
    setChosenFoundDependency: React.Dispatch<React.SetStateAction<Dependency | null>>
}

function AddDependencyModal({
  addDependencyModalActive,
  setAddDependencyModalState,
  setDependencyVersionsModalState,
  setChosenFoundDependency,
}: Props) {
  const [foundDependencies, setFoundDependencies] = useState<Dependency[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const searchDependencies = (e: any) => {
    e.preventDefault();
    if (!searchTerm) return;
    API.makeRequest({
      endpoint: 'dependencies/spring/',
      method: 'POST',
      body: {
        searchTerm,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((response) => {
      console.log(response);
      if (response.data) {
        const received: Dependency[] = response.data;
        const newDependencies: Dependency[] = [];
        received.forEach((x) => {
          if (!foundDependencies.some(
            (y) => (y.groupId === x.groupId && y.artifactId === x.artifactId),
          )) {
            newDependencies.push(x);
          }
        });
        setFoundDependencies(newDependencies);
      }
    }).catch((err) => {
      console.log(err);
    });
  };
  const onTableRowClick = (dependency: Dependency) => {
    setDependencyVersionsModalState(true);
    setChosenFoundDependency(dependency);
    setAddDependencyModalState(false);
  };

  const handleSearchInputChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Modal
      isActive={addDependencyModalActive}
      setModalState={setAddDependencyModalState}
    >
      <div className="edit-template__modal">
        <h3>Find dependencies</h3>
        <div className="edit-template__input-group">
          <input
            className="edit-template__input"
            placeholder="Enter dependency name..."
            onChange={handleSearchInputChange}
          />
          <Button label="Search" onClick={searchDependencies} />
        </div>

        <div className="block max-h-[300px] overflow-y-auto">
          <table className="table-default">
            <thead>
              {GetTableHeaderRow('GroupID', 'ArtifactID', 'Latest version')}
            </thead>
            <tbody>
              {
                  foundDependencies.map((dependency) => GetTableClickableRow(
                      () => onTableRowClick(dependency),
                      dependency.groupId,
                      dependency.artifactId,
                      dependency.version,
                  ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
}

export default AddDependencyModal;
