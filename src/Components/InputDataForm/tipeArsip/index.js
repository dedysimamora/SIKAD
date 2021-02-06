import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "../../AtomComponent/Select";

import "./TipeArsip.css";

const TipeArsip = (props) => {
  const { formik } = props;
  const AllArsip = useSelector((state) => state.arsip.data);
  const onSelect = (e) => {
    console.log(JSON.stringify(AllArsip, 2, null), "<<<<<<<<<<<<<<<<<<<<<");

    let arrOfNumber = AllArsip.map((data) => {
      if (data.tipeArsip == e) {
        return data.noDefinitif;
      } else {
        return 0;
      }
    });

    formik.setFieldValue("tipeArsip", e);
    formik.setFieldValue("noDefinitif", Math.max(...arrOfNumber) + 1);
  };

  let suggestion = [
    {
      value: "arsipAktif",
      label: "Arsip Aktif",
    },
    {
      value: "arsipInaktif",
      label: "Arsip Inaktif",
    },
    {
      value: "arsipStatis",
      label: "Arsip Statis",
    },
    // {
    //     value : "suratMasuk",
    //     label : "Surat Masuk"
    // },
    // {
    //     value : "suratKeluar",
    //     label : "Surat Keluar"
    // },
    // {
    //     value : "kartografi",
    //     label : "Kartografi"
    // }
  ];

  return (
    <div className={"TipeArsipContainer"}>
      <p className={"inputLabelText"}> Tipe Arsip : </p>
      <Select
        placeholder={"Pilih Tipe Arsip"}
        className={"selectInput"}
        size={"large"}
        width={"100%"}
        value={formik.values.tipeArsip}
        suggestion={suggestion}
        onSelect={onSelect}
        error={!!(formik.errors.tipeArsip && formik.touched.tipeArsip)}
        label={"Kode Klarifikasi"}
        helperText={
          formik.errors.tipeArsip && formik.touched.tipeArsip
            ? formik.errors.tipeArsip
            : ""
        }
      />
    </div>
  );
};

export default TipeArsip;
