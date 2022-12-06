import React from 'react';

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

export type ApiContextType = {
  templates: ITemplate[];
  setTemplates: (templates:ITemplate[])=>void;
  templateConfigs: ITemplateType[];
  setTemplateConfigs: (templateConfigs:ITemplateType[])=>void;
  templateType: ITemplateType;
}
