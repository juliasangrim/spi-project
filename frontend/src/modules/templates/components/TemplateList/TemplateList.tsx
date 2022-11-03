import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useNavigate } from "react-router-dom";
import getTemplates from '../../services/GetTemplates';
import Modal from '../../../general/components/Modal/Modal';

import '../../styles/Button.css';
import '../../styles/Table.css';
// interface Template { id: string, name: string, platform: string, created: string }
interface Template {
    id: number,
    type: string,
    lastUpdateTime: string,
    title: string,
    description: string
}
function TemplateList() {
    const [modalAddActive, setModalAddState] = React.useState(false);
    const [modalEditActive, setModalEditState] = React.useState(false);
    const [templatesList, setTemplatesList] = useState<Template[]>([]);
    useEffect(() => {
        //ЗАТЫЧКА
        let table: Template[] = []
        for (let i = 0; i < 3; i++) {
            table.push({ id: i, title: 'Template #1', type: 'Spring', lastUpdateTime: '28.10.2022 12:00', description: 'string' })
        }
        setTemplatesList(table)
        getTemplates()
            .then((response) => {
                console.log(response)
                if (response.data)
                    setTemplatesList(response.data)
            })
            .catch((err) => {
            })
    }, []);

    return (
        <div>
            <div className='flex-col items-center w-fit mx-auto mt-[30px] pt-[20px] w-fit max-w-full'>
                <div className='flex justify-end items-right mx-[30px] mb-[15px]'>
                    <button className='btn btn-green'
                        onClick={() => setModalAddState(true)}
                    >
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
                            {templatesList.map(
                                entity =>
                                    <tr key={entity.id}>
                                        <td>{entity.id}</td>
                                        <td>{entity.title}</td>
                                        <td>{entity.type}</td>
                                        <td>{entity.lastUpdateTime}</td>
                                        <td><button className='btn-reference'
                                            onClick={() => setModalEditState(true)}
                                        >
                                            Edit
                                        </button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal active={modalAddActive} setModalState={setModalAddState}>
                Hello
            </Modal>
            <Modal active={modalEditActive} setModalState={setModalEditState}>
                Edit
            </Modal>
        </div>
    )
}

export default TemplateList