import * as React from 'react';
import Modal from '../../general/components/Modal/Modal';
import '../styles/EditConfiguration.css';

function EditConfiguration() {
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
  const javaVersions: string[] = ['19', '17', '11', '8'];

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
        <div className="spring-modal">
          <p className="title">Select Spring Boot version</p>
          <form>
            <div className="spring-modal__form">
              <label htmlFor={springVersions[0]}>
                <input
                  type="radio"
                  id={springVersions[0]}
                  value={springVersions[0]}
                  name="spring-boot-version"
                />
                {springVersions[0]}
              </label>

              <label htmlFor={springVersions[1]}>
                <input
                  type="radio"
                  id={springVersions[1]}
                  value={springVersions[1]}
                  name="spring-boot-version"
                />
                {springVersions[1]}
              </label>

              <label htmlFor={springVersions[2]}>
                <input
                  type="radio"
                  id={springVersions[2]}
                  value={springVersions[2]}
                  name="spring-boot-version"
                />
                {springVersions[2]}
              </label>

              <label htmlFor={springVersions[3]}>
                <input
                  type="radio"
                  id={springVersions[3]}
                  value={springVersions[3]}
                  name="spring-boot-version"
                />
                {springVersions[3]}
              </label>

              <label htmlFor={springVersions[4]}>
                <input
                  type="radio"
                  id={springVersions[4]}
                  value={springVersions[4]}
                  name="spring-boot-version"
                />
                {springVersions[4]}
              </label>

              <label htmlFor={springVersions[5]}>
                <input
                  type="radio"
                  id={springVersions[5]}
                  value={springVersions[5]}
                  name="spring-boot-version"
                />
                {springVersions[5]}
              </label>
            </div>
          </form>
          <button type="button" className="btn btn-green">Save</button>
        </div>
      </Modal>

      <Modal
        active={javaModalActive}
        setModalState={setJavaModalState}
      >
        <div className="java-modal">
          <p className="title">Select Java version</p>
          <form>
            <div className="java-modal__form">
              <label htmlFor={javaVersions[0]}>
                <input
                  type="radio"
                  id={javaVersions[0]}
                  value={javaVersions[0]}
                  name="java-version"
                />
                {javaVersions[0]}
              </label>

              <label htmlFor={javaVersions[1]}>
                <input
                  type="radio"
                  id={javaVersions[1]}
                  value={javaVersions[1]}
                  name="java-version"
                />
                {javaVersions[1]}
              </label>

              <label htmlFor={javaVersions[2]}>
                <input
                  type="radio"
                  id={javaVersions[2]}
                  value={javaVersions[2]}
                  name="java-version"
                />
                {javaVersions[2]}
              </label>

              <label htmlFor={javaVersions[3]}>
                <input
                  type="radio"
                  id={javaVersions[3]}
                  value={javaVersions[3]}
                  name="java-version"
                />
                {javaVersions[3]}
              </label>
            </div>
          </form>
          <button type="button" className="btn btn-green">Save</button>
        </div>
      </Modal>
    </div>
  );
}

export default EditConfiguration;
