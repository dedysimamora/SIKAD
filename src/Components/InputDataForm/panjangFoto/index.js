import React from 'react'

import NumberInput from "../../AtomComponent/Input/NumberInput"

import "./PanjangFoto.css"

const PanjangFoto = (props) => {
    const {formik} = props

    return (
        <div className={"PanjangFotoContainer"}>
            <NumberInput
                id="panjangFoto"
                data-test-id="panjangFoto"
                name="panjangFoto"
                customClassName={"ukuranFoto"}
                width={'95%'}
                maxLength={3}
                placeholder={""}
                defaultValue={formik.values.panjangFoto}
                error={!!(formik.errors.panjangFoto && formik.touched.panjangFoto)}
                label={"Kode Klarifikasi"}
                onChange={formik.handleChange}
                onFocus={formik.handleBlur}
                helperText={
                    formik.errors.panjangFoto && formik.touched.panjangFoto
                        ? formik.errors.panjangFoto
                        : ""
                }
            />
        </div>
    )
}

export default PanjangFoto
