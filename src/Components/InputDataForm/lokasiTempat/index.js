import React from "react";

import TextInput from "../../AtomComponent/Input/TextInput";

import "./LokasiTempat.css";

const LokasiTempat = (props) => {
  const { formik } = props;
  return (
    <div className={"LokasiTempatContainer"}>
      <p className={"inputLabelText"}> Retensi : </p>
      <TextInput
        id="retensi"
        data-test-id="retensi"
        name="retensi"
        maxLength={10}
        placeholder={"Input retensi"}
        defaultValue={formik.values.retensi}
        error={!!(formik.errors.retensi && formik.touched.retensi)}
        label={"Kode Klarifikasi"}
        onChange={formik.handleChange}
        onFocus={formik.handleBlur}
        helperText={
          formik.errors.retensi && formik.touched.retensi
            ? formik.errors.retensi
            : ""
        }
      />
    </div>
  );
};

export default LokasiTempat;
