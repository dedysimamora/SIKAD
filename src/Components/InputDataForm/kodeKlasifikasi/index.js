import React from 'react'

import TextInput from "../../AtomComponent/Input/TextInput"

import "./KodeKlarifikasi.css"

const KodeKlarifikasi = (props) => {
    const {formik} = props
    const onCasd = () => {
        console.log("asd");
        
    }
    return (
        <div className={"KodeKlarifikasiContainer"}>
            <p className={"KodeKlarifikasiLabel"}> Kode Klarifikasi : </p>
            <TextInput
                id="kodeKlasifikasi"
                data-test-id="kodeKlasifikasi"
                name="kodeKlasifikasi"
                maxLength={10}
                placeholder={"Input Kode Klarifikasi"}
                defaultValue={formik.values.kodeKlasifikasi}
                error={!!(formik.errors.kodeKlasifikasi && formik.touched.kodeKlasifikasi)}
                label={"Kode Klarifikasi"}
                onChange={formik.handleChange}
                onFocus={formik.handleBlur}
                helperText={
                    formik.errors.kodeKlasifikasi && formik.touched.kodeKlasifikasi
                        ? formik.errors.kodeKlasifikasi
                        : ""
                }
            />
        </div>
    )
}

export default KodeKlarifikasi
