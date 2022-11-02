import * as React from 'react'
import {ApiContextType, ITemplate} from "../../../types/ApiTypes";
import {ApiContext} from "../../../context/ApiContext";


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