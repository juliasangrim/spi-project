import React, { useState } from 'react';
import GetTableClickableRow from '../../general/components/Table/GetTableClickableRow';
import { Dependency, Version } from '../../../types/ApiTypes';
import GetTableHeaderRow from '../../general/components/Table/GetTableHeaderRow';
import Button from '../../general/components/Button/Button';
import API from '../../general/Api';

interface Props {
  dependencies: Dependency[];
  setDependency: (dependency: Dependency) => void;
}

function FindDependencies({
  dependencies, setDependency,
}: Props) {
  const [foundDependencies, setFoundDependencies] = React.useState<Dependency[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const onTableRowClick = (dependency: Dependency) => {
    setDependency(dependency);
  };

  const findByRequest = (e: any) => {
    e.preventDefault();
    if (!searchTerm) return;
    API.makeRequest({
      endpoint: 'dependencies/spring/',
      method: 'POST',
      body: { searchTerm },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((response) => {
      if (response.data) {
        const received :Dependency[] = response.data;
        const newDependencies : Dependency[] = [];
        received.forEach((x) => {
          if (!dependencies.some(
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

  return (
    <div className="edit-default-config__modal">
      <h3>Find dependencies</h3>
      <p>Dependency name:</p>
      <form className="edit-default-config__input-group" onSubmit={findByRequest}>
        <input
          autoFocus
          className="edit-default-config__input"
          placeholder="Enter dependency name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <Button label="Search" onClick={findByRequest} />
      </form>
      <div className="block max-h-[300px] overflow-y-auto">
        <table className="edit-default-config__table">
          <thead>
            {GetTableHeaderRow('GroupID', 'ArtifactID', 'Latest version')}
          </thead>
          <tbody>
            {
              foundDependencies.map((entity) => (
                GetTableClickableRow(
                  () => onTableRowClick(entity),
                  entity.groupId,
                  entity.artifactId,
                  entity.version,
                )
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FindDependencies;
