import * as React from 'react';
import EditConfigForm from './EditConfigForm';
import Modal from '../../general/components/Modal/Modal';
import '../styles/EditConfig.css';
import '../styles/EditConfigTable.css';

function EditConfig() {
  const [springModalActive, setSpringModalState] = React.useState(false);
  const [javaModalActive, setJavaModalState] = React.useState(false);

  const springVersions: string[] = [
    '3.0.0 (SNAPSHOT)',
    '3.0.0 (RC1)',
    '2.7.6 (SNAPSHOT)',
    '2.7.5',
    '2.6.14 (SNAPSHOT)',
    '2.6.13',
  ];
  const javaVersions: string[] = [
    '19',
    '17',
    '11',
    '8',
  ];

  return (
    <div className="edit-config">
      <div className="edit-config__container">
        <p className="title">
          Edit default configuration
        </p>
        <table className="edit-config__table-default">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Value</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Spring Boot</td>
              <td>3.0.0 (SNAPSHOT)</td>
              <td>
                <button
                  type="button"
                  className="btn btn-green"
                  onClick={() => setSpringModalState(true)}
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>Java</td>
              <td>11</td>
              <td>
                <button
                  type="button"
                  className="btn btn-green"
                  onClick={() => setJavaModalState(true)}
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="edit-config__form-footer">
          <button type="button" className="btn btn-gray">Cancel</button>
          <button type="button" className="btn btn-green">Save changes</button>
        </div>
      </div>

      <Modal
        active={springModalActive}
        setModalState={setSpringModalState}
      >
        <div className="edit-config__modal">
          <p className="title">Select Spring Boot version</p>
          <EditConfigForm labelArr={springVersions} />
          <button type="button" className="btn btn-green">Save</button>
        </div>
      </Modal>

      <Modal
        active={javaModalActive}
        setModalState={setJavaModalState}
      >
        <div className="edit-config__modal">
          <p className="title">Select Java version</p>
          <EditConfigForm labelArr={javaVersions} />
          <button type="button" className="btn btn-green">Save</button>
        </div>
      </Modal>
    </div>
  );
}

export default EditConfig;
