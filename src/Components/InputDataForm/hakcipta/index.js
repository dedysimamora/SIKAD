import React from "react";

import TextInput from "../../AtomComponent/Input/TextInput";

import "./HakCipta.css";

const HakCipta = (props) => {
  const { formik } = props;
  return (
    <div className={"HakCiptaContainer"}>
      <p className={"inputLabelText"}> No Boks : </p>
      <TextInput
        id="noBoks"
        data-test-id="noBoks"
        name="noBoks"
        maxLength={10}
        placeholder={"Input No Boks"}
        defaultValue={formik.values.noBoks}
        error={!!(formik.errors.noBoks && formik.touched.noBoks)}
        label={"Kode Klarifikasi"}
        onChange={formik.handleChange}
        onFocus={formik.handleBlur}
        helperText={
          formik.errors.noBoks && formik.touched.noBoks
            ? formik.errors.noBoks
            : ""
        }
      />
    </div>
  );
};

export default HakCipta;
