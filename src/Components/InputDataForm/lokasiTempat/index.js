import React from 'react'

import TextInput from "../../AtomComponent/Input/TextInput"

import "./LokasiTempat.css"

const LokasiTempat = (props) => {
    const {formik} = props
    return (
        <div className={"LokasiTempatContainer"}>
            <p className={"inputLabelText"}> Lokasi Tempat : </p>
            <TextInput
                id="lokasiTempat"
                data-test-id="lokasiTempat"
                name="lokasiTempat"
                maxLength={10}
                placeholder={"Input Lokasi Tempat"}
                defaultValue={formik.values.lokasiTempat}
                error={!!(formik.errors.lokasiTempat && formik.touched.lokasiTempat)}
                label={"Kode Klarifikasi"}
                onChange={formik.handleChange}
                onFocus={formik.handleBlur}
                helperText={
                    formik.errors.lokasiTempat && formik.touched.lokasiTempat
                        ? formik.errors.lokasiTempat
                        : ""
                }
            />
        </div>
    )
}

export default LokasiTempat
