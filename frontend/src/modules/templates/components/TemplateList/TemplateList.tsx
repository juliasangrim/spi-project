import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { getTemplates } from '../../services/GetTemplates';

import '../../styles/Button.css';
import '../../styles/Table.css';

type Props = {}

export const TemplateList = (props: Props) => {
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
        <div className='flex-col items-center w-fit mx-auto mt-[50px] pt-[20px] px-[10px]'>
            <div className='flex justify-end items-right mx-[30px] mb-[15px]'>
                <button className="btn btn-green">
                    Add
                </button>
            </div>
            <table className="table">
                <thead className='font-extrabold'>
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
                        <td>1</td>
                        <td>tmp1</td>
                        <td>Spring</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>tmp2</td>
                        <td>Spring</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>tmp3</td>
                        <td>Spring</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}