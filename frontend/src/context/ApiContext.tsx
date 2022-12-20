import * as React from 'react';
import {
  ApiContextType, ISpring, ISpringTemplate, ITemplate, ITemplateType,
} from '../types/ApiTypes';

export const ApiContext = React.createContext<ApiContextType | null >(null);

type Props = {
    children: React.ReactNode
}

const ApiProvider: React.FC<Props> = ({ children }) => {
  /*
   * You can delete the default value
   */
  const [templates, setTemplates] = React.useState<ITemplate[]>([
    {
      id: 1,
      type: 'SPRING',
      lastUpdateTime: '2022-11-01T05:56:01.598Z',
      title: 'Шаблона МС-а проекта SPI',
      description: 'Шаблон с java 17, spring 2.4.9',
    },
  ]);

  const [templateConfigs, setTemplateConfigs] = React.useState<ITemplateType[]>([
    {
      type: 'SPRING',
      typeName: 'Spring',
      lastUpdateTime: '2022-11-01T08:39:58.176Z',
    },
  ]);

  const [springConfig, setSpringConfig] = React.useState<ISpring>({
    id: undefined,
    lastUpdateTime: '',
    type: '',
    typeName: '',
    defaultJavaVersion: undefined,
    availableVersions: [],
    defaultSpringBootVersion: '',
    springBootVersions: [],
    defaultDependencies: [],
  });

  const [templateType, setTemplateType] = React.useState<ITemplateType>({
    type: 'SPRING',
    typeName: 'Spring',
    lastUpdateTime: '2022-11-01T08:41:43.781Z',
  });

  const deleteSpringVersion = (version: string) => {
    if (springConfig !== null
        && springConfig.springBootVersions
        && springConfig.springBootVersions.length) {
      setSpringConfig({
        ...springConfig,
        springBootVersions: springConfig.springBootVersions.filter((v) => v !== version),
      });
    }
  };

  const setSpringBootVersion = (version: any) => {
    setSpringConfig({ ...springConfig, defaultSpringBootVersion: version });
  };

  return (
    <ApiContext.Provider value={{
      templates, setTemplates, setSpringBootVersion, deleteSpringVersion, springConfig, setSpringConfig, templateConfigs, setTemplateConfigs, templateType,
    }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
