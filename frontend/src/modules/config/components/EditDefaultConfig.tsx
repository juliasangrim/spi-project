import React, { useEffect, useState } from 'react';
import API from '../../general/Api';
import { ApiContext } from '../../../context/ApiContext';
import {ApiContextType, Dependency} from '../../../types/ApiTypes';
import Button from '../../general/components/Button/Button';
import ButtonCancel from '../../general/components/Button/ButtonCancel';
import ButtonDelete from '../../general/components/Button/ButtonDelete';
import EditParameterForm from './EditParameterForm';
import GetTableHeaderRow from '../../general/components/Table/GetTableHeaderRow';
import GetTableRow from '../../general/components/Table/GetTableRow';
import Modal from '../../general/components/Modal/Modal';
import AddDependencies from '../../addDependencies/components/AddDependencies';
import '../styles/EditDefaultConfig.css';
import '../styles/EditDefaultConfigTable.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AlertInfo from '../../general/components/Alert/AlertInfo';

function EditDefaultConfig() {
  const { templateConfigs, springConfig, setSpringConfig } = React.useContext(ApiContext) as ApiContextType;
  const [springModalActive, setSpringModalState] = React.useState(false);
  const [javaModalActive, setJavaModalState] = React.useState(false);
  const [addDependencyModalActive, setAddDependencyModalState] = React.useState(false);
  const [searchParams] = useSearchParams();
  const [isShowSavedChangesNotify, setIsShowSavedChangesNofity] = useState<boolean>(false);
  const navigate = useNavigate();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const showSavedChangesAlertOnThreeSeconds = async () => {
    setIsShowSavedChangesNofity(true);
    await delay(3000);
    setIsShowSavedChangesNofity(false);
  };
  const hideAlert = () => {
    setIsShowSavedChangesNofity(false);
  };

  const getTemplateConfigByType = (type: string | null) => {
    API.makeRequest({
      endpoint: `templates/configs/${type}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((response) => {
        if (response.data) setSpringConfig(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const configType = searchParams.get('type');
    getTemplateConfigByType(configType);
  }, []);

  const handleUpdateSpringBootConfig = (selectedVersion: string, newVersions: string[]) => {
    setSpringConfig({
      ...springConfig,
      springBootVersions: newVersions,
      defaultSpringBootVersion: selectedVersion,
    });
    setSpringModalState(false);
  };

  const handleUpdateJavaConfig = (selectedVersion: number, newVersions: number[]) => {
    setSpringConfig({
      ...springConfig,
      availableVersions: newVersions,
      defaultJavaVersion: selectedVersion,
    });
    setJavaModalState(false);
  };

  const handleSaveChanges = () => {
    console.log('save changes');
    if (springConfig !== null) {
      API.makeRequest({
        endpoint: `templates/configs/${springConfig.type}`,
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: springConfig,
      }).then(() => {
        showSavedChangesAlertOnThreeSeconds();
      }).catch((err) => {
        console.log(err);
      });
    }
  };

  const handleDeleteAddedDependency = (removedDependency: Dependency) => {
    const updatedDependencyList = springConfig.defaultDependencies.filter((dependency) => dependency !== removedDependency);
    setSpringConfig({
      ...springConfig,
      defaultDependencies: updatedDependencyList,
    });
  };

  const handleCancel = () => {
    navigate('/default-template-configs');
  };

  console.log(templateConfigs);
  console.log(springConfig);

  return (
    <div className="edit-default-config">
      <div className="edit-default-config__body">
        <h2>Edit default configuration</h2>
        <table className="edit-default-config__table">
          <thead>{GetTableHeaderRow('Parameter', 'Value', 'Actions')}</thead>
          <tbody>
            {GetTableRow(
              'Spring Boot',
              springConfig.defaultSpringBootVersion,
              <Button label="Edit" onClick={() => setSpringModalState(true)} />,
            )}
            {GetTableRow(
              'Java',
              springConfig.defaultJavaVersion,
              <Button label="Edit" onClick={() => setJavaModalState(true)} />,
            )}
          </tbody>
        </table>

        <div className="dependency-table-title">
          <h3>Dependencies</h3>
          <Button label="Add dependencies" onClick={() => setAddDependencyModalState(true)} />
        </div>
        <table className="edit-default-config__table">
          <thead>
            {GetTableHeaderRow('GroupID', 'ArtifactID', 'Version', 'Actions')}
          </thead>
          <tbody>

            {springConfig.defaultDependencies.map(
              (dependency) => (
                GetTableRow(
                  dependency.groupId,
                  dependency.artifactId,
                  dependency.version,
                  <ButtonDelete onClick={() => handleDeleteAddedDependency(dependency)} />,
                )
              ),
            )}
          </tbody>
        </table>

        <div className="edit-default-config__form-footer">
          <ButtonCancel
            label="Cancel"
            onClick={handleCancel}
          />
          <Button
            label="Save changes"
            onClick={handleSaveChanges}
          />
        </div>
      </div>

      <Modal
        isActive={springModalActive}
        setModalState={setSpringModalState}
      >
        <div className="edit-default-config__modal">
          <h3>Select Spring Boot version</h3>
          <EditParameterForm
            selectedItem={springConfig.defaultSpringBootVersion}
            itemList={springConfig.springBootVersions}
            handleUpdateData={handleUpdateSpringBootConfig}
          />
        </div>
      </Modal>

      <Modal
        isActive={javaModalActive}
        setModalState={setJavaModalState}
      >
        <div className="edit-default-config__modal">
          <h3>Select Java version</h3>
          <EditParameterForm
            selectedItem={springConfig.defaultJavaVersion}
            itemList={springConfig.availableVersions}
            handleUpdateData={handleUpdateJavaConfig}
          />
        </div>
      </Modal>

      <Modal
        isActive={addDependencyModalActive}
        setModalState={setAddDependencyModalState}
      >
        <AddDependencies
          dependencies={springConfig.defaultDependencies}
          setDependencies={(newDeps) => setSpringConfig({ ...springConfig, defaultDependencies: newDeps })}
          setModalState={setAddDependencyModalState}
        />
      </Modal>
      {isShowSavedChangesNotify ? <AlertInfo text="Changes has applied successfully" hide={hideAlert} /> : null}
    </div>
  );
}

export default EditDefaultConfig;
