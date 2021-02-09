import React, { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Modal, Button, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import InputDataForm from "../Components/InputDataForm";
import Firebase from "../Commons/FirebaseConfig";
import ModalLoading from "../Components/HelperComponent/ModalLoading";
import ModalClick from "../Components/HelperComponent/ModalClick";

const EditData = (props) => {
  const { confirm } = Modal;
  const { match } = props;
  const dispatch = useDispatch();
  const AllArsip = useSelector((state) => state.arsip.data);
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState(null);
  const [modal, setModal] = useState({
    visible: false,
    title: "",
    image: "",
    mainButton: "",
  });
  const setLoadingFunct = () => {
    setLoading(true);
  };

  useEffect(() => {
    (async () => {
      let dataIndex = await AllArsip.findIndex(
        (data) => data.arsipId == match.params.arsipId
      );
      await setEditData(AllArsip[dataIndex]);
      await setLoading(false);
    })();
  }, []);

  const closeModal = () => {
    setModal({
      ...modal,
      visible: false,
    });
  };

  const submitFunct = (values, actions) => {
    let db = Firebase.firestore();
    db.collection("arsip")
      .doc(`${match.params.arsipId}`)
      .set(values)
      .then((snapshot) => {
        (async () => {
          await dispatch.arsip.getAllArsip();
          actions.setSubmitting(true);
          await setLoading(false);
          await setModal({
            visible: true,
            title: "Berhasil Mengubah Data",
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
  };

  return editData !== null ? (
    <Formik
      isInitialValid={true}
      initialValues={{
        noKlasifikasi: editData.noKlasifikasi,
        indeks: editData.indeks,
        uraianInformasi: editData.uraianInformasi,
        tempatSimpan: editData.tempatSimpan,
        noBoks: editData.noBoks,
        retensi: editData.retensi,
        keterangan: editData.keterangan,
        foto: editData.foto,
        tipeArsip: editData.tipeArsip,
        noDefinitif: editData.noDefinitif,
        tanggalArsip: editData.tanggalArsip,
        panjangFoto: editData.panjangFoto,
        lebarFoto: editData.lebarFoto,
        kualitasFoto: editData.kualitasFoto,
      }}
      validationSchema={Yup.object({
        noKlasifikasi: Yup.string().required("harus di isi"),
        indeks: Yup.string().required("harus di isi"),
        uraianInformasi: Yup.string().required("harus di isi"),
        tempatSimpan: Yup.string().required("harus di isi"),
        noBoks: Yup.string().required("harus di isi"),
        retensi: Yup.string().required("harus di isi"),
        keterangan: Yup.string().required("harus di isi"),
        tipeArsip: Yup.string().required("harus di isi"),
        panjangFoto: Yup.string().required(" "),
        lebarFoto: Yup.string().required(" "),
        tanggalArsip: Yup.string().required(" "),
        foto: Yup.string().required(" "),
        noDefinitif: Yup.string().required(" "),
        kualitasFoto: Yup.boolean().required(" "),
      })}
      onSubmit={submitFunct}
      render={(formik) => (
        <React.Fragment>
          <InputDataForm
            formik={formik}
            setLoadingFunct={setLoadingFunct}
            action={"editData"}
          />

          <ModalClick
            title={modal.title}
            image={modal.image}
            mainButton={modal.mainButton}
            visible={modal.visible}
          />

          <ModalLoading visible={loading} />
        </React.Fragment>
      )}
    />
  ) : (
    <ModalLoading visible={loading} />
  );
};

export default EditData;
