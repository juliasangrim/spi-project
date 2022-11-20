import React, { useState, useEffect, SyntheticEvent } from 'react';
import { ApiContextType, ITemplate } from '../../../types/ApiTypes';
import { ApiContext } from '../../../context/ApiContext';
import API from '../../general/Api';
import Modal from '../../general/components/Modal/Modal';
import '../styles/Button.css';
import '../styles/Table.css';
import AddTemplate from './AddTemplate';

function TemplateList() {
  const { templates, setTemplates } = React.useContext(ApiContext) as ApiContextType;
  const [modalAddActive, setModalAddState] = React.useState(false);

  useEffect(() => {
    // ЗАТЫЧКА
    const table: ITemplate[] = [];
    for (let i = 0; i < 3; i++) {
      table.push({
        id: i, title: 'Template #1', type: 'Spring', lastUpdateTime: '28.10.2022 12:00', description: 'string',
      });
    }

    API.makeRequest({
      endpoint: 'templates',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((response) => {
      console.log(response);
      if (response.data) setTemplates(response.data);
      else setTemplates(table);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (

    <div>
      <div className="flex-col items-center w-fit mx-auto mt-[30px] pt-[20px] w-fit max-w-full">
        <div className="flex justify-end items-right mx-[30px] mb-[15px]">
          <button
            className="btn btn-green"
            onClick={() => setModalAddState(true)}
          >
            Add
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-default">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Platform</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {templates.map(
                (entity) => (
                  <tr key={entity.id}>
                    <td>{entity.id}</td>
                    <td>{entity.title}</td>
                    <td>{entity.type}</td>
                    <td>{entity.lastUpdateTime}</td>
                    <td>
                      <button className="btn-reference">
                        Edit
                      </button>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isActive={modalAddActive} setModalState={setModalAddState}>
        <AddTemplate setModalState={setModalAddState} />
      </Modal>
    </div>
  );
}

export default TemplateList;
