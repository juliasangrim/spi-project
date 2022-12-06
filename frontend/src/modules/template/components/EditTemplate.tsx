import * as React from 'react';

import Button from '../../general/components/Button/Button';
import ButtonCancel from '../../general/components/Button/ButtonCancel';
import ButtonDelete from '../../general/components/Button/ButtonDelete';
import EditParameterForm from './EditParameterForm';
import GetTableClickableRow from '../../general/components/Table/GetTableClickableRow';
import GetTableHeaderRow from '../../general/components/Table/GetTableHeaderRow';
import GetTableRow from '../../general/components/Table/GetTableRow';
import Modal from '../../general/components/Modal/Modal';

import '../styles/EditTemplate.css';
import '../styles/Table.css';

function EditTemplate() {
  const [springModalActive, setSpringModalState] = React.useState(false);
  const [javaModalActive, setJavaModalState] = React.useState(false);
  const [addDependencyModalActive, setAddDependencyModalState] = React.useState(false);
  const [dependencyVersionsModalActive, setDependencyVersionsModalState] = React.useState(false);

  /* Заглушки для макетов: начало */
  const springVersions: string[] = [
    '3.0.0 (SNAPSHOT)',
    '3.0.0 (RC1)',
    '2.7.6 (SNAPSHOT)',
    '2.7.5',
    '2.6.14 (SNAPSHOT)',
    '2.6.13',
  ];

  const javaVersions: string[] = ['19', '17', '11', '8'];

  interface Dependency {
    groupId: string;
    artId: string;
    version: string;
  }

  const dependencies: Dependency[] = [
    {
      groupId: 'io.easyspring.security',
      artId: 'spring-security-authentication',
      version: '1.1.0-RELEASE',
    },
    {
      groupId: 'io.easyspring.security',
      artId: 'easy-spring-security',
      version: '1.1.0-RELEASE',
    },
    {
      groupId: 'io.easyspring.security',
      artId: 'spring-security-authorize',
      version: '2.7.5',
    },
  ];

  interface Version {
    version: string;
    releaseDate: string;
  }

  const versions: Version[] = [
    { version: '1.1.0-RELEASE', releaseDate: '25 Jan 2021' },
    { version: '1.0.1-RELEASE', releaseDate: '14 Jan 2021' },
    { version: '1.0.0-RELEASE', releaseDate: '10 Dec 2020' },
  ];

  const onChanged = () => {
    // Заглушка
  };
  /* Заглушки для макетов: конец */

  const onTableRowClick = () => {
    setDependencyVersionsModalState(true);
    setAddDependencyModalState(false);
  };

  return (
    <div className="edit-template">
      <div className="edit-template__body">
        <h2>Edit template Pattern #1</h2>

        <table className="table-default">
          <thead>
            {GetTableHeaderRow('Parameter', 'Value', 'Actions')}
          </thead>
          <tbody>
            {GetTableRow(
              'Spring Boot',
              '3.0.0 (SNAPSHOT)',
              Button('Edit', () => setSpringModalState(true)),
            )}
            {GetTableRow(
              'Java',
              '11',
              Button('Edit', () => setJavaModalState(true)),
            )}
          </tbody>
        </table>

        <div className="dependency-table-title">
          <h3>Dependencies</h3>
          {Button('Add dependencies', () => setAddDependencyModalState(true))}
        </div>
        <table className="table-default">
          <thead>
            {GetTableHeaderRow('GroupID', 'ArtifactID', 'Latest version', 'Actions')}
          </thead>
          <tbody>
            {GetTableRow(
              dependencies[0].groupId,
              dependencies[0].artId,
              dependencies[0].version,
              ButtonDelete(() => setAddDependencyModalState(true)),
            )}
            {GetTableRow(
              dependencies[1].groupId,
              dependencies[1].artId,
              dependencies[1].version,
              ButtonDelete(() => setAddDependencyModalState(true)),
            )}
            {GetTableRow(
              dependencies[2].groupId,
              dependencies[2].artId,
              dependencies[2].version,
              ButtonDelete(() => setAddDependencyModalState(true)),
            )}
          </tbody>
        </table>

        <div className="edit-template__form-footer">
          {ButtonCancel('Cancel', () => {})}
          {Button('Save changes', () => {})}
        </div>
      </div>

      <Modal
        isActive={springModalActive}
        setModalState={setSpringModalState}
      >
        <div className="edit-template__modal">
          <h3>Select Spring Boot version</h3>
          <EditParameterForm onChanged={onChanged} labelArr={springVersions} />
          {Button('Save', () => {})}
        </div>
      </Modal>

      <Modal
        isActive={javaModalActive}
        setModalState={setJavaModalState}
      >
        <div className="edit-template__modal">
          <h3>Select Java version</h3>
          <EditParameterForm onChanged={onChanged} labelArr={javaVersions} />
          {Button('Save', () => {})}
        </div>
      </Modal>

      <Modal
        isActive={addDependencyModalActive}
        setModalState={setAddDependencyModalState}
      >
        <div className="edit-template__modal">
          <h3>Find dependencies</h3>
          <p>Dependency name:</p>
          <div className="edit-template__input-group">
            {/* TODO: Убрать атрибут value, он нужен только для примера */}
            <input
              className="edit-template__input"
              placeholder="Enter dependency name..."
              value="Spring Security"
            />
            {Button('Search', () => {})}
          </div>

          <table className="table-default">
            <thead>
              {GetTableHeaderRow('GroupID', 'ArtifactID', 'Latest version')}
            </thead>
            <tbody>
              {
               /* Заглушка: каждая строка открывает один и тот же Modal,
                * который изображен на макете
                */
              }
              {GetTableClickableRow(
                onTableRowClick,
                dependencies[0].groupId,
                dependencies[0].artId,
                dependencies[0].version,
              )}
              {GetTableClickableRow(
                onTableRowClick,
                dependencies[1].groupId,
                dependencies[1].artId,
                dependencies[1].version,
              )}
              {GetTableClickableRow(
                onTableRowClick,
                dependencies[2].groupId,
                dependencies[2].artId,
                dependencies[2].version,
              )}
            </tbody>
          </table>
        </div>
      </Modal>

      <Modal
        isActive={dependencyVersionsModalActive}
        setModalState={setDependencyVersionsModalState}
      >
        <div className="edit-template__modal">
          <h3>Find dependencies</h3>
          <p>io.easyspring.security:spring-security-authentication</p>
          <table className="table-default">
            <thead>
              {GetTableHeaderRow('Version', 'Release date')}
            </thead>
            <tbody>
              {GetTableRow(versions[0].version, versions[0].releaseDate)}
              {GetTableRow(versions[1].version, versions[1].releaseDate)}
              {GetTableRow(versions[2].version, versions[2].releaseDate)}
            </tbody>
          </table>
          <div className="button-group-container">
            {ButtonCancel('Back', () => { setDependencyVersionsModalState(false); })}
            <div className="button-group">
              {Button }
              {Button }
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default EditTemplate;
