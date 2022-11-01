import * as React from 'react';
import {ApiContextType, ITemplate, ITemplateType, ITodo, Props} from '../types/apiTypes'

export const ApiContext = React.createContext<ApiContextType | null >(null)

const ApiProvider: React.FC<Props> = ({children}) => {
    /*
    * We will delete the default value later
    * */
    const [templates, setTemplates] = React.useState<ITemplate[]>([
        {
            id: 1,
            type: "SPRING",
            lastUpdateTime: "2022-11-01T05:56:01.598Z",
            title: "Шаблона МС-а проекта SPI",
            description: "Шаблон с java 17, spring 2.4.9"
        }
    ])

    const [templateConfigs, setTemplateConfigs] = React.useState<ITemplateType[]>([
        {
            type: "SPRING",
            typeName: "Spring",
            lastUpdateTime: "2022-11-01T08:39:58.176Z"
        }
    ])

    const [todos, setTodos] = React.useState<ITodo[]>([])

    const saveTodos = (todos: ITodo[]) => {
        setTodos(todos)
    }

    const [templateType, setTemplateType] = React.useState<ITemplateType>({
        type: "SPRING",
        typeName: "Spring",
        lastUpdateTime: "2022-11-01T08:41:43.781Z"
    })

    return <ApiContext.Provider value={{templates, templateConfigs, templateType, todos,saveTodos}}>{children}</ApiContext.Provider>
};

export  default  ApiProvider;