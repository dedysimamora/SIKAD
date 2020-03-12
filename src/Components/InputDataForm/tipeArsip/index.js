import React from 'react'

import Select from "../../AtomComponent/Select"

import "./TipeArsip.css"

const TipeArsip = (props) => {
    const {formik} = props
    const onSelect = (e) => {
        console.log(e," <<<<< on select");
        formik.setFieldValue('tipeArsip', e)
        
    }
    return (
        <div className={"TipeArsipContainer"}>
            <p className={"TipeArsipLabel"}> Tipe Arsip : </p>
            <Select 
                placeholder={"Pilih Tipe Arsip"}
                className={"selectInput"}
                size={"large"}
                onSelect={onSelect}
                error={!!(formik.errors.tipeArsip && formik.touched.tipeArsip)}
                label={"Kode Klarifikasi"}
                helperText={
                    formik.errors.tipeArsip && formik.touched.tipeArsip
                        ? formik.errors.tipeArsip
                        : ""
                }
            />
        </div>
    )
}

export default TipeArsip
