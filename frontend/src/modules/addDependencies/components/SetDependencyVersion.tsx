import React from 'react';
import ButtonCancel from '../../general/components/Button/ButtonCancel';
import Button from '../../general/components/Button/Button';

import { Dependency, Version, VersionType } from '../../../types/ApiTypes';
import API from '../../general/Api';
import GetTableHeaderRow from '../../general/components/Table/GetTableHeaderRow';
import GetTableRow from '../../general/components/Table/GetTableRow';
import GetTableClickableRow from '../../general/components/Table/GetTableClickableRow';

interface Props{
  dependency: Dependency;
  onChoseDependencyVersion: (version:string, versionType: VersionType) => void;
  onCancelSelectVerion: () => void;
}

function SetDependencyVersion({
  dependency, onChoseDependencyVersion, onCancelSelectVerion,
}: Props) {
  const [versions, setVersions] = React.useState<Version[]>([]);
  React.useEffect(() => {
    API.makeRequest({
      endpoint: 'dependencies/spring/versions',
      method: 'POST',
      body: {
        groupId: dependency.groupId,
        artifactId: dependency.artifactId,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((response) => {
      console.log(response);
      if (response.data) setVersions(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="edit-default-config__modal">
      <h3>Find dependencies</h3>
      <p>{`${dependency.groupId}:${dependency.artifactId}`}</p>
      <div className="block max-h-[300px] overflow-y-auto">
        <table className="edit-default-config__table" style={{ width: '-webkit-fill-available' }}>
          <thead>
            {GetTableHeaderRow('Version', 'Release date')}
          </thead>
          <tbody>
            {
              versions.map((entity) => (
                GetTableClickableRow(
                  () => onChoseDependencyVersion(entity.version, VersionType.COMMON),
                  entity.version,
                  entity.releaseDate,
                )
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="flex flex-row gap-5 justify-between w-full">
        <ButtonCancel label="Back" onClick={onCancelSelectVerion} />
        <div className="flex flex-row gap-5">
          <Button label="No version" onClick={() => onChoseDependencyVersion('', VersionType.INHERITED)} />
          <Button label="Latest version" onClick={() => onChoseDependencyVersion('+', VersionType.LATEST)} />
        </div>
      </div>
    </div>
  );
}

export default SetDependencyVersion;
