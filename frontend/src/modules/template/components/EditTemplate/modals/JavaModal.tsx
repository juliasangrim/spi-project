import React from 'react';
import Button from '../../../../general/components/Button/Button';
import Modal from '../../../../general/components/Modal/Modal';
import EditParameterForm from '../TemplateParameters/EditParameterForm';

interface Props{
    javaModalActive: boolean;
    setJavaModalState: any;
    javaVersions: Array<number>;

    setJavaVersion: React.Dispatch<React.SetStateAction<number>>
    handleSaveChanges: () => void;
}

function JavaModal({ javaModalActive, setJavaModalState, javaVersions, setJavaVersion, handleSaveChanges }: Props) {
  return (
    <Modal
      isActive={javaModalActive}
      setModalState={setJavaModalState}
    >
      <div className="edit-template__modal">
        <h3>Select Java version</h3>
        <EditParameterForm onChanged={setJavaVersion} labelArr={javaVersions} />
        <Button label="Save" onClick={handleSaveChanges} />
      </div>
    </Modal>
  );
}

export default JavaModal;
