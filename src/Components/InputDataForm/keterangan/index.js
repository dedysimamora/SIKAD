import React from 'react'

import TextInput from "../../AtomComponent/Input/TextInput"

import "./Keterangan.css"

const Keterangan = (props) => {
    const {formik} = props
    const onCasd = () => {
        console.log("asd");
        
    }
    return (
        <div className={"KeteranganContainer"}>
            <p className={"inputLabelText"}> Keterangan : </p>
            <TextInput
                id="keterangan"
                data-test-id="keterangan"
                name="keterangan"
                maxLength={10}
                placeholder={"Input Keterangan"}
                defaultValue={formik.values.keterangan}
                error={!!(formik.errors.keterangan && formik.touched.keterangan)}
                label={"Kode Klarifikasi"}
                onChange={formik.handleChange}
                onFocus={formik.handleBlur}
                helperText={
                    formik.errors.keterangan && formik.touched.keterangan
                        ? formik.errors.keterangan
                        : ""
                }
            />
        </div>
    )
}

export default Keterangan
