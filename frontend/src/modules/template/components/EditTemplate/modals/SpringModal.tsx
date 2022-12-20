import React from 'react';
import Button from '../../../../general/components/Button/Button';
import Modal from '../../../../general/components/Modal/Modal';
import EditParameterForm from '../TemplateParameters/EditParameterForm';

interface Props {
    springModalActive: boolean;
    setSpringModalState: any;
    springBootVersions: Array<string>;

    setSpringBootVersion: React.Dispatch<React.SetStateAction<string>>
    handleSaveChanges: () => void;
}

function SpringModal({ springModalActive, setSpringModalState, springBootVersions, setSpringBootVersion, handleSaveChanges }: Props) {
  return (
    <Modal
      isActive={springModalActive}
      setModalState={setSpringModalState}
    >
      <div className="edit-template__modal">
        <h3>Select Spring Boot version</h3>
        <EditParameterForm onChanged={setSpringBootVersion} labelArr={springBootVersions} />
        <Button label="Save" onClick={handleSaveChanges} />
      </div>
    </Modal>
  );
}

export default SpringModal;
