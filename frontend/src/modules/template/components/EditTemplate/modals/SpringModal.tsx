import React from 'react';
import Button from '../../../../general/components/Button/Button';
import Modal from '../../../../general/components/Modal/Modal';
import EditParameterForm from '../TemplateParameters/EditParameterForm';

interface Props{
    springModalActive: boolean;
    setSpringModalState: any;
    springBootVersions: Array<string>,
}

function SpringModal({ springModalActive, setSpringModalState, springBootVersions }: Props) {
  return (
    <Modal
      isActive={springModalActive}
      setModalState={setSpringModalState}
    >
      <div className="edit-template__modal">
        <h3>Select Spring Boot version</h3>
        <EditParameterForm onChanged={() => {}} labelArr={springBootVersions} />
        <Button label="Save" onClick={() => {}} />
      </div>
    </Modal>
  );
}

export default SpringModal;
