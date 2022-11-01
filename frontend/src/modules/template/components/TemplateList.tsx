import * as React from 'react'
import {ApiContextType, ITemplate, ITodo} from "../../../types/apiTypes";
import {ApiContext} from "../../../context/apiContext";
import TemplateDataService from "../services/template.service";


const TemplateList = () => {
    const {templates, todos, saveTodos} = React.useContext(ApiContext) as ApiContextType

    React.useEffect(()=> {
        TemplateDataService.getAllTodos().then((response: any) => {
            if(response.status === 200){
                saveTodos(response.data.todos)
                console.log(response.data.todos)
            }
        }).catch((error) => {
            console.log(error)
        })
    },[])
    return (
        /*
        * Add the UI here
        * */
        <>
            <div className="sign-in-form">
                <div className="sign-in-form__container">
                    <p className="sign-in-form__title">Templates List</p>
                    <form className="">
                        {
                            todos.map((template: ITodo) => (
                               <div key={template.id} className="flex space-x-2">
                                   <span>#{template.id}</span>
                                   <p  className="truncate">{template.todo}</p>
                               </div>
                            ))
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default TemplateList;