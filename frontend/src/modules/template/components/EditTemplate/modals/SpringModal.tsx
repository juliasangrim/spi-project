import React from 'react';
import Button from '../../../../general/components/Button/Button';
import Modal from '../../../../general/components/Modal/Modal';
import EditParameterForm from '../TemplateParameters/EditParameterForm';

interface Props{
    springModalActive: boolean;
    setSpringModalState: any;
}

function SpringModal({ springModalActive, setSpringModalState }: Props) {
  const springVersions: string[] = [
    '3.0.0 (SNAPSHOT)',
    '3.0.0 (RC1)',
    '2.7.6 (SNAPSHOT)',
    '2.7.5',
    '2.6.14 (SNAPSHOT)',
    '2.6.13',
  ];

  return (
    <Modal
      isActive={springModalActive}
      setModalState={setSpringModalState}
    >
      <div className="edit-template__modal">
        <h3>Select Spring Boot version</h3>
        <EditParameterForm onChanged={() => {}} labelArr={springVersions} />
        <Button label="Save" onClick={() => {}} />
      </div>
    </Modal>
  );
}

export default SpringModal;
