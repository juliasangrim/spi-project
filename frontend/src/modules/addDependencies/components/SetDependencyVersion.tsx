import React from 'react';
import ButtonCancel from '../../config/components/ButtonCancel';
import Button from '../../config/components/Button';

import { Dependency, Version, VersionType } from '../../../types/ApiTypes';
import API from '../../general/Api';
import GetTableHeaderRow from '../../config/components/GetTableHeaderRow';
import GetTableRow from '../../config/components/GetTableRow';
import GetTableClickableRow from '../../config/components/GetTableClickableRow';

interface Props{
  dependency: Dependency;
  onChoseDependencyVersion: (version:string | null, versionType: VersionType) => void;
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
        {ButtonCancel('Back', onCancelSelectVerion)}
        <div className="flex flex-row gap-5">
          {Button(
            'No vesion',
            () => onChoseDependencyVersion(null, VersionType.INHERITED),
          )}
          {Button(
            'Latest version',
            () => onChoseDependencyVersion(versions[0].version, VersionType.LATEST),
          )}
        </div>
      </div>
    </div>
  );
}

export default SetDependencyVersion;
