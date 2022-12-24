import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiContextType } from '../../../types/ApiTypes';
import { ApiContext } from '../../../context/ApiContext';
import API from '../../general/Api';

function DefaultTemplateConfigs() {
  const { templateConfigs, setTemplateConfigs } = React.useContext(ApiContext) as ApiContextType;
  const navigate = useNavigate();

  useEffect(() => {
    API.makeRequest({
      endpoint: 'templates/configs',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((response) => {
      console.log(response);
      if (response.data) setTemplateConfigs(response.data);
      else console.log('Error while fetching default templates');
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const handleEditClick = useCallback((type: string) => {
    navigate(`/edit-default-configuration?type=${type}`);
  }, []);

  return (
    <div>
      <div className="flex-col items-center w-fit mx-auto mt-[30px] pt-[20px] w-fit max-w-full">
        <div className="flex justify-end items-right mx-[30px] mb-[15px]">
          <button type="button" className="btn btn-green">Add</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-default">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Last update</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {templateConfigs.map(
                (entity) => (
                  <tr>
                    <td>{entity.typeName}</td>
                    <td>{entity.type}</td>
                    <td>{entity.lastUpdateTime}</td>
                    <td>
                      <button type="button" className="btn-reference" onClick={() => handleEditClick(entity.type)}>Edit</button>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DefaultTemplateConfigs;
