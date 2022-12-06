import React from 'react';
import Button from '../../../../general/components/Button/Button';
import Modal from '../../../../general/components/Modal/Modal';
import EditParameterForm from '../TemplateParameters/EditParameterForm';

interface Props{
    javaModalActive: boolean;
    setJavaModalState: any;
}

function JavaModal({ javaModalActive, setJavaModalState }: Props) {
  const javaVersions: string[] = ['19', '17', '11', '8'];

  return (
    <Modal
      isActive={javaModalActive}
      setModalState={setJavaModalState}
    >
      <div className="edit-template__modal">
        <h3>Select Java version</h3>
        <EditParameterForm onChanged={() => {}} labelArr={javaVersions} />
        <Button label="Save" onClick={() => {}} />
      </div>
    </Modal>
  );
}

export default JavaModal;
