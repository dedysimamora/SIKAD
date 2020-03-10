import React from 'react'

import TextInput from "../../AtomComponent/Input/TextInput"

import "./TempatSimpan.css"

const TempatSimpan = (props) => {
    const onCasd = () => {
        console.log("asd");
        
    }
    return (
        <div className={"tempatSimpanContainer"}>
            <p className={"tempatSimpanLabel"}> Tempat Simpan : </p>
            <TextInput
                        id="message"
                        data-test-id="message"
                        name="message"
                        maxLength={12}
                        placeholder={"Asdasd"}
                        defaultValue={"Asdasd"}
                        error={false}
                        helperText={""}
                        label={"Kode Klarifikasi"}
                        onChange={onCasd}
                        onFocus={onCasd}
                    />
        </div>
    )
}

export default TempatSimpan
