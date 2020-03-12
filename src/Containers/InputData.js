import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import InputDataForm from "../Components/InputDataForm"

const InputData = () => {

    const formik = useFormik({
        isInitialValid: false,
        initialValues: {
            kodeKlasifikasi: "",
            indeks: "",
            uraianInformasi: "",
            tempatSimpan: "",
            hakCipta: "",
            lokasiTempat: "",
            keterangan: "",
            foto: "",
            tipeArsip: "",
            noDefiatif: "",
            kualitas: "",
            ukuran: "",
            tanggalSimpan: ""
        },
        validationSchema: Yup.object({
            kodeKlasifikasi: Yup.string()
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
                .required("harus di isi")
        }),
        onSubmit: values => {
            console.log(values, "<<<<<<<<<<<<<<<< values");
            
          },
    });
    
    const onCasd = () => {
        console.log("asd");
        
    }
    
    return (
        <InputDataForm
            formik={formik}
        />
    )
}

export default InputData
