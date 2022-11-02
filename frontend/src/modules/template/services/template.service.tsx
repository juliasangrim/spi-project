import React from 'react';
import {ICreateTemplate, IPutTemplate, ITemplate, ITemplateType} from "../../../types/apiTypes";
import http from '../../../http-common'

class  TemplateDataService {

    /*
    * Templates
    * */
    getAllTemplates(){
        return http.get<Array<ITemplate>>("/templates")
    }

    postTemplate(data: ICreateTemplate){
        return http.post<ICreateTemplate>("/templates", data)
    }

    /*
    * Templates configs
    * */

    getAllTemplatesConfigs(){
        return http.get<Array<ITemplateType>>("/templates/configs")
    }

    getTemplateConfigType(type: String){
        return http.get<ITemplateType>(`/templates/configs/${type}`)
    }

    putTemplateConfigType(data: IPutTemplate, type: String){
        return http.put<any>(`/templates/configs/${type}`, data)
    }
}

export  default new TemplateDataService();
