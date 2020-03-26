import React from 'react'

import Select from "../../AtomComponent/Select"

import "./TipeArsip.css"

const TipeArsip = (props) => {
    const {formik} = props
    const onSelect = (e) => {
        formik.setFieldValue('tipeArsip', e)
        
    }

    let suggestion = [
        {
            value : "personalFile",
            label : "Personal File"
        },
        {
            value : "foto",
            label : "Foto"
        },
        {
            value : "video",
            label : "Video"
        },
        {
            value : "suratMasuk",
            label : "Surat Masuk"
        },
        {
            value : "suratKeluar",
            label : "Surat Keluar"
        },
        {
            value : "kartografi",
            label : "Kartografi"
        }
    ]

    
    return (
        <div className={"TipeArsipContainer"}>
            <p className={"inputLabelText"}> Tipe Arsip : </p>
            <Select 
                placeholder={"Pilih Tipe Arsip"}
                className={"selectInput"}
                size={"large"}
                width={'100%'}
                value={formik.values.tipeArsip}
                suggestion={suggestion}
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
