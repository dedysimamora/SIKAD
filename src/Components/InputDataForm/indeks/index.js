import React from 'react'

import TextArea from "../../AtomComponent/TextArea"

import "./Indeks.css"

const Indeks = (props) => {
    const {formik} = props
    
    return (
        <div className={"IndeksContainer"}>
            <p className={"IndeksLabel"}> Indeks : </p>
            <TextArea 
                row={2}
                id="indeks"
                data-test-id="indeks"
                name="indeks"
                maxLength={50}
                placeholder={"Input Indeks"}
                defaultValue={formik.values.indeks}
                error={!!(formik.errors.indeks && formik.touched.indeks)}
                label={"Kode Klarifikasi"}
                onChange={formik.handleChange}
                onFocus={formik.handleBlur}
                helperText={
                    formik.errors.indeks && formik.touched.indeks
                        ? formik.errors.indeks
                        : ""
                }
            />
        </div>
    )
}

export default Indeks
