import React from "react";

import DatePicker from "../../AtomComponent/DatePicker";

import "./TanggalSimpan.css";

const TanggalSimpan = (props) => {
  const { formik } = props;
  const onSelect = (date, dateString) => {
    formik.setFieldValue("tanggalArsip", dateString);
  };
  return (
    <div className={"tanggalSimpanContainer"}>
      <p className={"inputLabelText"}> Tanggal Arsip : </p>
      <DatePicker
        placeholder={"Input Tanggal Arsip"}
        className={"datePicker"}
        size={"large"}
        onChange={onSelect}
        value={formik.values.tanggalArsip}
        width={"100%"}
        error={!!(formik.errors.tanggalArsip && formik.touched.tanggalArsip)}
        // label={"Kode Klarifikasi"}
        helperText={
          formik.errors.tanggalArsip && formik.touched.tanggalArsip
            ? formik.errors.tanggalArsip
            : ""
        }
      />
    </div>
  );
};

export default TanggalSimpan;
