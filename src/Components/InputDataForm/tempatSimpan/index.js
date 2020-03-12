import React from 'react'

import TextInput from "../../AtomComponent/Input/TextInput"

import "./TempatSimpan.css"

const TempatSimpan = (props) => {
    const {formik} = props
    const onCasd = () => {
        console.log("asd");
        
    }
    return (
        <div className={"tempatSimpanContainer"}>
            <p className={"tempatSimpanLabel"}> Tempat Simpan : </p>
            <TextInput
                id="tempatSimpan"
                data-test-id="tempatSimpan"
                name="tempatSimpan"
                maxLength={10}
                placeholder={"Input Tempat Simpan"}
                defaultValue={formik.values.tempatSimpan}
                error={!!(formik.errors.tempatSimpan && formik.touched.tempatSimpan)}
                label={"Kode Klarifikasi"}
                onChange={formik.handleChange}
                onFocus={formik.handleBlur}
                helperText={
                    formik.errors.tempatSimpan && formik.touched.tempatSimpan
                        ? formik.errors.tempatSimpan
                        : ""
                }
            />
        </div>
    )
}

export default TempatSimpan
