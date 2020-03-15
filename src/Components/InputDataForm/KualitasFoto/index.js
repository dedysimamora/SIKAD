import React from 'react'

import Select from "../../AtomComponent/Select"

import "./KualitasFoto.css"

const KualitasFoto = (props) => {
    const {formik} = props
    const onSelect = (e) => {
        formik.setFieldValue('kualitasFoto', e)
        
    }
    let suggestion = [
        {
            value : true,
            label : "Baik"
        },
        {
            value : false,
            label : "Buruk"
        },
    ]
    return (
        <div className={"KualitasFotoContainer"}>
            <Select 
                placeholder={"KualitasFoto"}
                className={"kualitasFotoDropdown"}
                size={"small"}
                onSelect={onSelect}
                width={'95%'}
                suggestion={suggestion}
                error={!!(formik.errors.kualitasFoto && formik.touched.kualitasFoto)}
                helperText={
                    formik.errors.kualitasFoto && formik.touched.kualitasFoto
                        ? formik.errors.kualitasFoto
                        : ""
                }
            />
        </div>
    )
}

export default KualitasFoto
