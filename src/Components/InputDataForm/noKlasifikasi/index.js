import React from 'react'

import NumberInput from "../../AtomComponent/Input/NumberInput"

import "./NoKlasifikasi.css"

const NoKlasifikasi = (props) => {
    const {formik} = props
    return (
        <div className={"NoKlasifikasiContainer"}>
            <p className={"inputLabelText"}> No Klasifikasi : </p>
            <NumberInput
                id="noKlasifikasi"
                data-test-id="noKlasifikasi"
                name="noKlasifikasi"
                customClassName={"noKlasifikasi"}
                maxLength={10}
                width={'100%'}
                placeholder={"Input no Klasifikasi"}
                defaultValue={formik.values.noKlasifikasi}
                error={!!(formik.errors.noKlasifikasi && formik.touched.noKlasifikasi)}
                onChange={formik.handleChange}
                onFocus={formik.handleBlur}
                helperText={
                    formik.errors.noKlasifikasi && formik.touched.noKlasifikasi
                        ? formik.errors.noKlasifikasi
                        : ""
                }
            />
        </div>
    )
}

export default NoKlasifikasi
