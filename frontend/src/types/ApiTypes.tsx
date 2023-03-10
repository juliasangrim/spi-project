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

export interface ISpring {
    id: any
    type: string
    typeName: string
    lastUpdateTime: string
    defaultJavaVersion: any
    availableVersions: number[]
    defaultSpringBootVersion: string
    springBootVersions: string[]
    defaultDependencies: any[]
}

export type ApiContextType = {
    templates: ITemplate[];
    setTemplates: (templates:ITemplate[])=>void;
    templateConfigs: ITemplateType[];
    setTemplateConfigs: (templateConfigs:ITemplateType[])=>void;
    templateType: ITemplateType;
    springConfig: ISpring
    setSpringConfig: (springConfiguration: ISpring) => void;
}

export enum VersionType {
    COMMON = 'COMMON',
    LATEST = 'LATEST',
    INHERITED = 'INHERITED'
}
export interface Dependency {
  groupId: string;
  artifactId: string;
  versionType: VersionType;
  version: string | null;
}
export interface Version {
  version: string;
  releaseDate: string;
}
