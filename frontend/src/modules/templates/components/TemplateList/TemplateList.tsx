import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { getTemplates } from '../../services/GetTemplates';
import Modal from '../../../general/components/Modal/Modal';

import '../../styles/Button.css';
import '../../styles/Table.css';
interface Template { id: string, name: string, platform: string, created: string }
function TemplateList() {
    const [modalAddActive, setModalAddState] = React.useState(false);
    const [modalEditActive, setModalEditState] = React.useState(false);
    const [templatesList, setTemplatesList] = useState<Template[]>([]);
    useEffect(() => {
        let table: Template[] = []
        for (let i = 0; i < 3; i++) {
            table.push({ id: '1', name: 'Template #1', platform: 'Spring', created: '28.10.2022 12:00' })
        }
        setTemplatesList(table)
        getTemplates()
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
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
                                        <td>{entity.name}</td>
                                        <td>{entity.platform}</td>
                                        <td>{entity.created}</td>
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