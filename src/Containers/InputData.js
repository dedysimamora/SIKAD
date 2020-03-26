import React, {useState, useEffect} from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal, Button, Spin } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import InputDataForm from "../Components/InputDataForm"
import Firebase from  '../Commons/FirebaseConfig'
import ModalLoading from "../Components/HelperComponent/ModalLoading"
import ModalClick from "../Components/HelperComponent/ModalClick"

const InputData = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState({
        visible : false,
        title : "",
        image : "",
        mainButton : ""
    })

    const setLoadingFunct = () => {
        setLoading(true)
    }

    const closeModal = () => {
        setModal({
            ...modal,
            visible : false
        })
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
            lebarFoto : "",
            kualitasFoto : ""
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
                .required(" "),
            noDefinitif: Yup.string()
                .required(" "),
            kualitasFoto: Yup.boolean()
                .required(" ")
        }),
        onSubmit: (values, actions) => {
            console.log(values, "<<<<<<<<<<<<<<<<<<<");
            
            let db = Firebase.firestore()
            db.collection('arsip').add(values)
            .then((snapshot) => {
               (async () => {
                await dispatch.arsip.getAllArsip();
                await formik.resetForm()
                await formik.setSubmitting(false)
                await setLoading(false)
                await setModal({
                    visible : true,
                    title : "Berhasil Menambahkan data Data",
                    image : "success",
                    mainButton : {
                        title : 'Ok',
                        onClick : () => {closeModal()}
                    }
                })
                })()
            })
            .catch((err) => {
                setLoading(false)
            });
          }
    });
    
    
    return (
       <React.Fragment>
            <InputDataForm
            formik={formik}
            setLoadingFunct={setLoadingFunct}
            action={"inputData"}
            />

            <ModalClick 
                title = {modal.title}
                image = {modal.image} 
                mainButton = {modal.mainButton} 
                visible = {modal.visible}
            />

            <ModalLoading visible={loading} />
       </React.Fragment>
    )
}

export default InputData
