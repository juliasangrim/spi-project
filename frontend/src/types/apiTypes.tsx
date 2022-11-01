import React from "react";

export interface ITemplateType {
    type: string
    typeName: string
    lastUpdateTime: string
}

export interface IPutTemplate {
    id: number
    type: string
}


export interface ICreateTemplate {
    type: string
    title: string
    description: string
}


export interface ITemplate {
    id?: any | null
    type: string
    lastUpdateTime: string
    title: string
    description: string
}

export interface ITodo {
    id: number
    todo: string
    completed: boolean
    userId: number
}

export interface Props {
    children: React.ReactNode
}

export type ApiContextType = {
    templates: ITemplate[];
    templateConfigs: ITemplateType[];
    templateType: ITemplateType;
    todos: ITodo[];
    saveTodos: (todos: ITodo[]) => void;

}

