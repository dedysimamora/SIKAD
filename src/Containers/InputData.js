import React, {useState, useEffect} from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal, Button, Spin } from 'antd';
import InputDataForm from "../Components/InputDataForm"
import {storage} from  '../Commons/FirebaseConfig'

const InputData = () => {
    const [loading, setLoading] = useState(false)
    let a = 128

    const setLoadingFunct = () => {
        setLoading(true)
    }

    const formik = useFormik({
        isInitialValid: false,
        initialValues: {
            noKlasifikasi: "",
            indeks: "",
            uraianInformasi: "",
            tempatSimpan: "",
            hakCipta: "",
            lokasiTempat: "",
            keterangan: "",
            foto: "",
            tipeArsip: "",
            noDefinitif: "",
            tanggalSimpan: "",
            panjangFoto: "",
            lebarFoto : ""
        },
        validationSchema: Yup.object({
            noKlasifikasi: Yup.string()
                .required("harus di isi"),
            indeks: Yup.string()
                .required("harus di isi"),
            uraianInformasi: Yup.string()
                .required("harus di isi"),
            tempatSimpan: Yup.string()
                .required("harus di isi"),
            hakCipta: Yup.string()
                .required("harus di isi"),
            lokasiTempat: Yup.string()
                .required("harus di isi"),
            keterangan: Yup.string()
                .required("harus di isi"),
            tipeArsip : Yup.string()
                .required("harus di isi"),
            panjangFoto : Yup.string()
                .required(" "),
            lebarFoto : Yup.string()
                .required(" "),
            tanggalSimpan : Yup.string()
                .required(" "),
            foto: Yup.string()
            .required(" ")
        }),
        onSubmit: (values) => {
            
            setLoading(false)
            console.log(values, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
          }
    });
    
    
    return (
       <React.Fragment>
            <InputDataForm
            formik={formik}
            setLoadingFunct={setLoadingFunct}
        />
        <Modal
            visible={loading}
            onOk={() => {console.log("ok") }}
            onCancel={() => {console.log("yaaa")}}
            zIndex={9999}
            closable={false}
            centered
            footer={null}
            transitionName={"fade"}
            maskTransitionName={"fade"}
        >

          <div className={"modalLoadingContainer"}>
                <Spin tip="Loading..."></Spin>
          </div>
        </Modal>
       </React.Fragment>
    )
}

export default InputData
