import React from 'react'


import DatePicker from "../../AtomComponent/DatePicker"

import "./TanggalSimpan.css"

const TanggalSimpan = (props) => {
    const {formik} = props
    const onSelect = (date, dateString) => {
        formik.setFieldValue('tanggalSimpan', dateString)
    }
    return (
        <div className={"tanggalSimpanContainer"}>
            <p className={"inputLabelText"}> Tanggal Simpan : </p>
            <DatePicker 
                placeholder={"Input Tanggal Simpan"}
                className={"datePicker"}
                size={"large"}
                onChange={onSelect}
                value={formik.values.tanggalSimpan}
                width={"100%"}
                error={!!(formik.errors.tanggalSimpan && formik.touched.tanggalSimpan)}
                label={"Kode Klarifikasi"}
                helperText={
                    formik.errors.tanggalSimpan && formik.touched.tanggalSimpan
                        ? formik.errors.tanggalSimpan
                        : ""
                }
            />
        </div>
    )
}

export default TanggalSimpan
