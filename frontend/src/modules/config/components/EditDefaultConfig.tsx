import React, { useState, useEffect } from 'react';
import API from '../../general/Api';
import { ApiContext } from '../../../context/ApiContext';
import { ApiContextType, ITemplate, ITemplateType } from '../../../types/ApiTypes';
import Button from '../../general/components/Button/Button';
import ButtonCancel from '../../general/components/Button/ButtonCancel';
import ButtonDelete from '../../general/components/Button/ButtonDelete';
import EditParameterForm from './EditParameterForm';
import GetTableHeaderRow from './GetTableHeaderRow';
import GetTableRow from './GetTableRow';
import Modal from '../../general/components/Modal/Modal';
import AddDependencies from '../../addDependencies/components/AddDependencies';
import '../styles/EditDefaultConfig.css';
import '../styles/EditDefaultConfigTable.css';

function EditDefaultConfig() {
  const { templateConfigs, setTemplateConfigs } = React.useContext(
    ApiContext,
  ) as ApiContextType;
  const [springModalActive, setSpringModalState] = React.useState(false);
  const [springBootVersions, setSpringBootVersions] = React.useState([]);
  const [springBootType, setSpringBootType] = React.useState(null);
  const [addDependencyModalActive, setAddDependencyModalState] = React.useState(false);

  const [dependencies, setDependencies] = React.useState<Dependency[]>([]);

  useEffect(() => {
    API.makeRequest({
      endpoint: 'templates/configs',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((response) => {
        if (response.data) setTemplateConfigs(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditConfig = (config: ITemplateType) => {
    API.makeRequest({
      endpoint: `templates/configs/${config.type}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((response) => {
        if (response.data) {
          setSpringModalState(true);
          setSpringBootVersions(response.data.springBootVersions);
          console.log(response.data);
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSpringChanged = (type: any) => {
    setSpringBootType(type);
  };

  const handleUpdateConfig = () => {
    if (springBootType) {
      API.makeRequest({
        // Why we have to pass "springBootType" here if we already have it in the body?
        endpoint: `templates/configs/${springBootType}`,
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: {
          // Id from where?
          id: 0,
          type: springBootType,
        },
      }).catch((err) => {
        console.log(err);
      });
    }
  };

  /* Заглушки для макетов: начало */

  useEffect(() => {
    setDependencies(
      [
        {
          groupId: 'io.easyspring.security',
          artifactId: 'spring-security-authentication',
          versionType: VersionType.COMMON,
          version: '1.1.0-RELEASE',
        },
        {
          groupId: 'io.easyspring.security',
          artifactId: 'easy-spring-security',
          versionType: VersionType.COMMON,
          version: '1.1.0-RELEASE',
        },
        {
          groupId: 'io.easyspring.security',
          artifactId: 'spring-security-authorize',
          versionType: VersionType.COMMON,
          version: '2.7.5',
        },
      ],
    );
  }, []);

  const versions: Version[] = [
    { version: '1.1.0-RELEASE', releaseDate: '25 Jan 2021' },
    { version: '1.0.1-RELEASE', releaseDate: '14 Jan 2021' },
    { version: '1.0.0-RELEASE', releaseDate: '10 Dec 2020' },
  ];

  const javaVersions: string[] = ['19', '17', '11', '8'];
  /* Заглушки для макетов: конец */

  return (
    <div className="edit-default-config">
      <div className="edit-default-config__body">
        <h2>Edit default configuration</h2>
        <table className="edit-default-config__table">
          <thead>{GetTableHeaderRow('Parameter', 'Value', 'Actions')}</thead>
          <tbody>
            {templateConfigs.map((config) => GetTableRow(
              config.type,
              config.typeName,
              <Button label="Edit" onClick={() => handleEditConfig(config)} />,
            ))}
          </tbody>
        </table>

        <div className="dependency-table-title">
          <h3>Dependencies</h3>
          <Button label="Add dependencies" onClick={() => setAddDependencyModalState(true)} />
        </div>
        <table className="edit-default-config__table">
          <thead>
            {GetTableHeaderRow('GroupID', 'ArtifactID', 'Latest version', 'Actions')}
          </thead>
          <tbody>

            {dependencies.map(
              (dependency) => (
                GetTableRow(
                  dependency.groupId,
                  dependency.artifactId,
                  dependency.version,
                  ButtonDelete(() => setAddDependencyModalState(true)),
                )
              ),
            )}
          </tbody>
        </table>

        <div className="edit-default-config__form-footer">
          <ButtonCancel label="Cancel" onClick={() => {}} />
          <Button label="Save changes" onClick={() => {}} />
        </div>
      </div>

      <Modal
        isActive={springModalActive}
        setModalState={setSpringModalState}
      >
        <div className="edit-default-config__modal">
          <h3>Select Spring Boot version</h3>
          <EditParameterForm
            onChanged={onSpringChanged}
            labelArr={springBootVersions}
          />
          <Button label="Save" onClick={() => handleUpdateConfig()} />
        </div>
      </Modal>

      {/* Временно убрали
      <Modal isActive={javaModalActive} setModalState={setJavaModalState}>
        <div className="edit-default-config__modal">
          <h3>Select Java version</h3>
          <EditParameterForm onChanged={} labelArr={javaVersions} />
          {Button('Save', () => {})}
        </div>
      </Modal>
      */}

      <Modal
        isActive={addDependencyModalActive}
        setModalState={setAddDependencyModalState}
      >
        <AddDependencies
          dependencies={dependencies}
          setDependencies={setDependencies}
          setModalState={setAddDependencyModalState}
        />
      </Modal>
    </div>
  );
}

export default EditDefaultConfig;
