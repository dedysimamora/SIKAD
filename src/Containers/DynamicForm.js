import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Row, Col, Button } from "antd";
import DynamicData from "../DynamicData";
import TextInput from "../Components/AtomComponent/Input/TextInput";
import DatePicker from "../Components/AtomComponent/DatePicker";
import NumberInput from "../Components/AtomComponent/Input/NumberInput";
import Select from "../Components/AtomComponent/Select";
import TextArea from "../Components/AtomComponent/TextArea";
import Firebase from "../Commons/FirebaseConfig";
import ModalLoading from "../Components/HelperComponent/ModalLoading";
import ModalClick from "../Components/HelperComponent/ModalClick";
import { useSelector, useDispatch } from "react-redux";

import "./DynamicForm.css";

const DynamicForm = (props) => {
  const dispatch = useDispatch();
  const { webType, type, match } = props;
  const AllArsip = useSelector((state) => state.arsip.data);
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState(null);
  const [modal, setModal] = useState({
    visible: false,
    title: "",
    image: "",
    mainButton: "",
  });

  useEffect(() => {
    if (type == "edit") {
      (async () => {
        let dataIndex = await AllArsip.findIndex(
          (data) => data.arsipId == match.params.arsipId
        );
        console.log(AllArsip[dataIndex], "<<<<<<<<<<<<<<<<awa");
        await setEditData(AllArsip[dataIndex]);
        await setLoading(false);
      })();
    }
  }, [webType]);

  const formik = useFormik({
    isInitialValid: false,
    initialValues:
      type == "edit"
        ? AllArsip[
            AllArsip.findIndex((data) => data.arsipId == match.params.arsipId)
          ]
        : DynamicData[webType].dataInputObject.reduce(
            (o, key) => ({ ...o, [key.variableName]: "" }),
            {}
          ),
    validationSchema: Yup.object(
      DynamicData[webType].dataInputObject.reduce(
        (o, key) => ({
          ...o,
          [key.variableName]: Yup.string().required("harus di isi"),
        }),
        {}
      )
    ),
    onSubmit: (values, actions) => {
      //   console.log(values, "<<<");
      setLoading(true);
      console.log("masuk pak eko");
      let db = Firebase.firestore();
      if (type == "add") {
        db.collection("arsip")
          .add({
            ...values,
            webType: `${DynamicData[webType].title.toUpperCase()}`,
          })
          .then((snapshot) => {
            (async () => {
              console.log("masuk pak eko then");
              await dispatch.arsip.getAllArsip(
                `${DynamicData[webType].title.toUpperCase()}`
              );
              await formik.resetForm();
              await formik.setSubmitting(false);
              await setLoading(false);
              await setModal({
                visible: true,
                title: "Berhasil Menambahkan data Data",
                image: "success",
                mainButton: {
                  title: "Ok",
                  onClick: () => {
                    closeModal();
                  },
                },
              });
            })();
          })
          .catch((err) => {
            setLoading(false);
          });
      } else {
        db.collection("arsip")
          .doc(`${match.params.arsipId}`)
          .set({
            ...values,
            webType: `${DynamicData[webType].title.toUpperCase()}`,
          })
          .then((snapshot) => {
            (async () => {
              await dispatch.arsip.getAllArsip(
                `${DynamicData[webType].title.toUpperCase()}`
              );
              actions.setSubmitting(true);
              await setLoading(false);
              await setModal({
                visible: true,
                title: "Berhasil Mengubah Data",
                image: "success",
                mainButton: {
                  title: "Ok",
                  onClick: async () => {
                    // window.location.href = `/${
                    //   DynamicData[webType].title
                    // }/arsip/${values.tipeArsip
                    //   .split(/(?=[A-Z])/)
                    //   .join("-")
                    //   .toLowerCase()}`;
                    closeModal();
                  },
                },
              });
            })();
          })
          .catch((err) => {
            setLoading(false);
          });
      }
    },
  });

  const setLoadingFunct = () => {
    setLoading(true);
  };

  const closeModal = () => {
    setModal({
      ...modal,
      visible: false,
    });
  };

  const dynamicContent = (objectData) => {
    switch (objectData.type) {
      case "text":
        return (
          <TextInput
            id={objectData.variableName}
            name={objectData.variableName}
            maxLength={objectData.maxLength}
            placeholder={objectData.placeHolder}
            defaultValue={formik.values[`${objectData.variableName}`]}
            error={
              !!(
                formik.errors[`${objectData.variableName}`] &&
                formik.touched[`${objectData.variableName}`]
              )
            }
            label={objectData.placeHolder}
            onChange={formik.handleChange}
            onFocus={formik.handleBlur}
            helperText={
              formik.errors[`${objectData.variableName}`] &&
              formik.touched[`${objectData.variableName}`]
                ? formik.errors[`${objectData.variableName}`]
                : ""
            }
          />
        );

      case "number":
        return (
          <NumberInput
            id={objectData.variableName}
            name={objectData.variableName}
            maxLength={objectData.maxLength}
            placeholder={objectData.placeHolder}
            defaultValue={formik.values[`${objectData.variableName}`]}
            error={
              !!(
                formik.errors[`${objectData.variableName}`] &&
                formik.touched[`${objectData.variableName}`]
              )
            }
            label={objectData.placeHolder}
            onChange={formik.handleChange}
            onFocus={formik.handleBlur}
            helperText={
              formik.errors[`${objectData.variableName}`] &&
              formik.touched[`${objectData.variableName}`]
                ? formik.errors[`${objectData.variableName}`]
                : ""
            }
          />
        );

      case "select":
        return (
          <Select
            placeholder={objectData.placeHolder}
            size={"large"}
            width={"100%"}
            className={"selectInput"}
            value={formik.values[`${objectData.variableName}`]}
            suggestion={objectData.suggestion}
            onSelect={(e) => {
              if (objectData.variableName == "tipeArsip") {
                console.log(AllArsip, "<<<<<<<<<<<<<< ini all arsip");
                let arrOfNumber = AllArsip.map((data) => {
                  if (data.tipeArsip == e) {
                    return data.noDefinitif;
                  } else {
                    return 0;
                  }
                });
                formik.setFieldValue(
                  "noDefinitif",
                  Math.max(...arrOfNumber) + 1
                );
              }

              formik.setFieldValue(`${objectData.variableName}`, e);
            }}
            error={
              !!(
                formik.errors[`${objectData.variableName}`] &&
                formik.touched[`${objectData.variableName}`]
              )
            }
            label={objectData.placeHolder}
            helperText={
              formik.errors[`${objectData.variableName}`] &&
              formik.touched[`${objectData.variableName}`]
                ? formik.errors[`${objectData.variableName}`]
                : ""
            }
          />
        );

      case "date":
        return (
          <DatePicker
            placeholder={objectData.placeHolder}
            size={"large"}
            onChange={(date, dateString) => {
              formik.setFieldValue(`${objectData.variableName}`, dateString);
            }}
            value={formik.values[`${objectData.variableName}`]}
            error={
              !!(
                formik.errors[`${objectData.variableName}`] &&
                formik.touched[`${objectData.variableName}`]
              )
            }
            label={objectData.placeHolder}
            helperText={
              formik.errors[`${objectData.variableName}`] &&
              formik.touched[`${objectData.variableName}`]
                ? formik.errors[`${objectData.variableName}`]
                : ""
            }
          />
        );
      case "textArea":
        return (
          <TextArea
            row={2}
            id={objectData.variableName}
            name={objectData.variableName}
            maxLength={objectData.maxLength}
            placeholder={objectData.placeHolder}
            defaultValue={formik.values[`${objectData.variableName}`]}
            error={
              !!(
                formik.errors[`${objectData.variableName}`] &&
                formik.touched[`${objectData.variableName}`]
              )
            }
            label={objectData.placeHolder}
            onChange={formik.handleChange}
            onFocus={formik.handleBlur}
            helperText={
              formik.errors[`${objectData.variableName}`] &&
              formik.touched[`${objectData.variableName}`]
                ? formik.errors[`${objectData.variableName}`]
                : ""
            }
          />
        );

      default:
        break;
    }
  };
  return (
    <div className={"dynamicFormContainer"}>
      <Row gutter={[16, 16]}>
        {DynamicData[webType].dataInputObject.map((obj) => (
          <Col span={obj.spanSize}>
            <div className={"inputContainer"}>
              <p className={"inputLabel"}>{`${obj.title} :`}</p>
              {dynamicContent(obj)}
            </div>
          </Col>
        ))}
      </Row>
      <Row style={{ marginTop: "25px" }}>
        <Col md={{ span: 24 }} xs={{ span: 24 }}>
          <Button
            block
            onClick={formik.handleSubmit}
            className={"SaveButton"}
            style={{
              backgroundColor: `${DynamicData[webType].color.mainColor}`,
              color: `${DynamicData[webType].color.thirdColor}`,
              fontWeight: 700,
            }}
            disabled={!formik.isValid}
          >
            {type == "add" ? "Unggah Data" : "Ubah Data"}
          </Button>
        </Col>
      </Row>
      <ModalClick
        title={modal.title}
        image={modal.image}
        mainButton={modal.mainButton}
        visible={modal.visible}
        mainColor={DynamicData[webType].color.mainColor}
        secondColor={DynamicData[webType].color.thirdColor}
      />

      <ModalLoading
        visible={loading}
        color={DynamicData[webType].color.mainColor}
      />
    </div>
  );
};

export default DynamicForm;
