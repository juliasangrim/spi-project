import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ApiContextType } from '../../../types/ApiTypes';
import { ApiContext } from '../../../context/ApiContext';
import API from '../../general/Api';
import Modal from '../../general/components/Modal/Modal';
import '../styles/Button.css';
import '../styles/Table.css';
import Button from '../../general/components/Button/Button';
import AddTemplate from './AddTemplate';

function TemplateList() {
  const navigate = useNavigate();
  const { templates, setTemplates } = React.useContext(ApiContext) as ApiContextType;
  const [modalAddActive, setModalAddState] = React.useState(false);
  useEffect(() => {
    API.makeRequest({
      endpoint: 'templates',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((response) => {
      console.log(response);
      if (response.data) setTemplates(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const handleEditClick = useCallback((id: number) => {
    navigate(`/edit-template?id=${id}`);
  }, []);

  return (
    <div>
      <div className="flex-col items-center w-fit mx-auto mt-[30px] pt-[20px] w-fit max-w-full">
        <div className="flex justify-end items-right mx-[30px] mb-[15px]">
          <Button
            label="Add"
            onClick={() => setModalAddState(true)}
          />
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
                    <td>{format(new Date(entity.lastUpdateTime), 'dd.MM.yyyy kk:mm')}</td>
                    <td>
                      <button type="button" className="btn-reference" onClick={() => { handleEditClick(entity.id); }}>
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
