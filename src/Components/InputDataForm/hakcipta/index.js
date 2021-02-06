import React from "react";

import TextInput from "../../AtomComponent/Input/TextInput";

import "./HakCipta.css";

const HakCipta = (props) => {
  const { formik } = props;
  return (
    <div className={"HakCiptaContainer"}>
      <p className={"inputLabelText"}> No Buku : </p>
      <TextInput
        id="noBuku"
        data-test-id="noBuku"
        name="noBuku"
        maxLength={10}
        placeholder={"Input No Buku"}
        defaultValue={formik.values.noBuku}
        error={!!(formik.errors.noBuku && formik.touched.noBuku)}
        label={"Kode Klarifikasi"}
        onChange={formik.handleChange}
        onFocus={formik.handleBlur}
        helperText={
          formik.errors.noBuku && formik.touched.noBuku
            ? formik.errors.noBuku
            : ""
        }
      />
    </div>
  );
};

export default HakCipta;
