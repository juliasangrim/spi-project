import React from 'react';
import Modal from '../../../../general/components/Modal/Modal';
import ExportForm from '../ExportForm';

interface Props{
    exportModalActive: boolean;
    setExportModalState: any;
}

function ExportModal({ exportModalActive, setExportModalState }: Props) {
  return (
    <Modal
      isActive={exportModalActive}
      setModalState={setExportModalState}
    >
      <div className="edit-template__modal">
        <h3>Export template</h3>
        <ExportForm />
      </div>
    </Modal>
  );
}

export default ExportModal;
