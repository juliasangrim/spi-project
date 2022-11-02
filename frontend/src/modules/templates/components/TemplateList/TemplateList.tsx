import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { getTemplates } from '../../services/GetTemplates';

import '../../styles/Button.css';
import '../../styles/Table.css';

function TemplateList() {
    const [templatesList, setTemplatesList] = useState('');
    useEffect(() => {
        getTemplates()
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div className='flex-col items-center w-fit mx-auto mt-[30px] pt-[20px] w-fit max-w-full'>
            <div className='flex justify-end items-right mx-[30px] mb-[15px]'>
                <button className='btn btn-green'>
                    Add
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className='table-default'>
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
                        <tr>
                            <th>1</th>
                            <td>Template #1</td>
                            <td>Spring</td>
                            <td>28.10.2022 12:00</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Template #1</td>
                            <td>Spring</td>
                            <td>28.10.2022 12:00</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Template #1</td>
                            <td>Spring</td>
                            <td>28.10.2022 12:00</td>
                            <td>Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TemplateList