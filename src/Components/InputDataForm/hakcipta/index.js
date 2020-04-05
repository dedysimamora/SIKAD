import React from 'react'

import TextInput from "../../AtomComponent/Input/TextInput"

import "./HakCipta.css"

const HakCipta = (props) => {
    const {formik} = props
    return (
        <div className={"HakCiptaContainer"}>
            <p className={"inputLabelText"}> Hak Cipta : </p>
            <TextInput
                id="hakCipta"
                data-test-id="hakCipta"
                name="hakCipta"
                maxLength={10}
                placeholder={"Input Hak Cipta"}
                defaultValue={formik.values.hakCipta}
                error={!!(formik.errors.hakCipta && formik.touched.hakCipta)}
                label={"Kode Klarifikasi"}
                onChange={formik.handleChange}
                onFocus={formik.handleBlur}
                helperText={
                    formik.errors.hakCipta && formik.touched.hakCipta
                        ? formik.errors.hakCipta
                        : ""
                }
            />
        </div>
    )
}

export default HakCipta
