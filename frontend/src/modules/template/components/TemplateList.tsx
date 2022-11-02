import * as React from 'react'
import {ApiContextType, ITemplate} from "../../../types/apiTypes";
import {ApiContext} from "../../../context/apiContext";
import TemplateDataService from "../services/template.service";


const TemplateList = () => {
    const {templates} = React.useContext(ApiContext) as ApiContextType

    return (

        <>
            {/*
                Add your UI here
              */
            }
        </>
    )
}

export default TemplateList;