import React from 'react'

import NumberInput from "../../AtomComponent/Input/NumberInput"

import "./LebarFoto.css"

const LebarFoto = (props) => {
    const {formik} = props
    const isMobile = window.innerWidth <= 600
    

    return (
        <div className={"LebarFotoContainer"}>
            <NumberInput
                id={"lebarFoto"}
                data-test-id="lebarFoto"
                name="lebarFoto"
                placeholder={"Lebar Foto"}
                customClassName={isMobile ? "lebarFotoMobile" : "lebarFoto"}
                width={'100%'}
                maxLength={3}
                defaultValue={formik.values.lebarFoto}
                error={!!(formik.errors.lebarFoto && formik.touched.lebarFoto)}
                label={"Kode Klarifikasi"}
                onChange={formik.handleChange}
                onFocus={formik.handleBlur}
                helperText={
                    formik.errors.lebarFoto && formik.touched.lebarFoto
                        ? formik.errors.lebarFoto
                        : ""
                }
            />
        </div>
    )
}

export default LebarFoto
