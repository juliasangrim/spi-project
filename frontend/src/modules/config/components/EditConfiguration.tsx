import * as React from 'react';
import Modal from '../../general/components/Modal/Modal';
import '../styles/EditConfiguration.css';

function EditConfiguration() {
  const [springModalActive, setSpringModalState] = React.useState(false);
  const [javaModalActive, setJavaModalState] = React.useState(false);

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
              <label htmlFor="3.0.0 (SNAPSHOT)">
                <input
                  type="radio"
                  id="3.0.0 (SNAPSHOT)"
                  value="3.0.0 (SNAPSHOT)"
                  name="spring-boot-version"
                />
                3.0.0 (SNAPSHOT)
              </label>

              <label htmlFor="3.0.0 (RC1)">
                <input
                  type="radio"
                  id="3.0.0 (RC1)"
                  value="3.0.0 (RC1)"
                  name="spring-boot-version"
                />
                3.0.0 (RC1)
              </label>

              <label htmlFor="2.7.6 (SNAPSHOT)">
                <input
                  type="radio"
                  id="2.7.6 (SNAPSHOT)"
                  value="2.7.6 (SNAPSHOT)"
                  name="spring-boot-version"
                />
                2.7.6 (SNAPSHOT)
              </label>

              <label htmlFor="2.7.5">
                <input
                  type="radio"
                  id="2.7.5"
                  value="2.7.5"
                  name="spring-boot-version"
                />
                2.7.5
              </label>

              <label htmlFor="2.6.14 (SNAPSHOT)">
                <input
                  type="radio"
                  id="2.6.14 (SNAPSHOT)"
                  value="2.6.14 (SNAPSHOT)"
                  name="spring-boot-version"
                />
                2.6.14 (SNAPSHOT)
              </label>

              <label htmlFor="2.6.13">
                <input
                  type="radio"
                  id="2.6.13"
                  value="2.6.13"
                  name="spring-boot-version"
                />
                2.6.13
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
              <label htmlFor="19">
                <input
                  type="radio"
                  id="19"
                  value="19"
                  name="java-version"
                />
                19
              </label>
              <label htmlFor="17">
                <input
                  type="radio"
                  id="17"
                  value="17"
                  name="java-version"
                />
                17
              </label>
              <label htmlFor="11">
                <input
                  type="radio"
                  id="11"
                  value="11"
                  name="java-version"
                />
                11
              </label>
              <label htmlFor="8">
                <input
                  type="radio"
                  id="8"
                  value="8"
                  name="java-version"
                />
                8
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
