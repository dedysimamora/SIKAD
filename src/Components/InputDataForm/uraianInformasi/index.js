import React from 'react'

import TextArea from "../../AtomComponent/TextArea"

import "./UraianInformasi.css"

const UraianInformasi = (props) => {
    const {formik} = props

    return (
        <div className={"UraianInformasiContainer"}>
            <p className={"inputLabelText"}> Uraian Informasi : </p>
            <TextArea 
                row={4}
                id="uraianInformasi"
                data-test-id="uraianInformasi"
                name="uraianInformasi"
                maxLength={100}
                placeholder={"Input Uraian Informasi"}
                defaultValue={formik.values.uraianInformasi}
                error={!!(formik.errors.uraianInformasi && formik.touched.uraianInformasi)}
                label={"Kode Klarifikasi"}
                onChange={formik.handleChange}
                onFocus={formik.handleBlur}
                helperText={
                    formik.errors.uraianInformasi && formik.touched.uraianInformasi
                        ? formik.errors.uraianInformasi
                        : ""
                }
            />
        </div>
    )
}

export default UraianInformasi
