import React, { useEffect, useState } from "react";
import {
  Divider,
  Card,
  Row,
  Col,
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
} from "antd";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import img from "../Assets/Images/background2.jpg";
import dinasLogo from "../Assets/Images/semarang.png";
import Firebase from "../Commons/FirebaseConfig";
import Loading from "../Components/HelperComponent/ModalLoading";
import ModalClick from "../Components/HelperComponent/ModalClick";
import "./Landing.css";

const Landing = () => {
  const [register, setRegister] = useState(false);
  const [errorAuth, setErrorAuth] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    visible: false,
    title: "",
    image: "",
    mainButton: "",
  });
  const closeModal = () => {
    formik.resetForm();
    setRegister(false);
    setModal({
      ...modal,
      visible: false,
    });
  };
  let history = useHistory();
  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("format email harus benar")
        .required("email tidak boleh kosong"),
      userName: Yup.string().required("username tidak boleh kosong"),
      password: Yup.string()
        .min(6, "password minimal 6 karakter")
        .required("password tidak boleh kosong"),
    }),
  });

  const loginAction = () => {
    setLoading(true);
    setErrorAuth("");
    let FirebaseAuth = Firebase.auth();
    FirebaseAuth.signInWithEmailAndPassword(
      formik.values.email,
      formik.values.password
    )
      .then((data) => {
        setLoading(false);
        localStorage.setItem(
          "token",
          JSON.stringify(
            { uid: data.user.uid, userName: data.user.displayName },
            2,
            null
          )
        );
        history.push("/sikad/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error, "<<<<<< error login");
        if (
          error.message == "auth/user-not-found" ||
          error.message == "auth/user-not-found"
        ) {
          setErrorAuth("Email atau Password Salah !");
        } else {
          setErrorAuth(`${error.message}`);
        }
      });
  };

  const registerAction = () => {
    setLoading(true);
    let FirebaseAuth = Firebase.auth();
    FirebaseAuth.createUserWithEmailAndPassword(
      formik.values.email,
      formik.values.password
    )
      .then((data) => {
        let user = Firebase.auth().currentUser;
        user
          .updateProfile({ displayName: formik.values.userName })
          .then((updateData) => {
            setLoading(false);
            setModal({
              visible: true,
              title: "Registrasi Berhasil",
              image: "success",
              mainButton: {
                title: "Ok",
                onClick: () => {
                  closeModal();
                },
              },
            });
          })
          .catch((error) => {
            console.log(error, "update Data Error");
          });
      })
      .catch(function (error) {
        setLoading(false);
        switch (error.code) {
          case "auth/email-already-in-use":
            setErrorAuth("Email Sudah Terdaftar !");
            break;

          default:
            setErrorAuth(`${error.message}`);
            break;
        }
      });
  };

  const authTypeTriger = (type) => {
    setRegister(type);
    setErrorAuth("");
    formik.resetForm();
  };

  return (
    <div>
      <img src={img} className={"imageBG"} width={100} />
      <Row>
        <Col className={"leftMenuHomePage"} span={24}>
          <Card className={"cardLoginForm"}>
            <Row>
              <Col span={7}>
                <img src={dinasLogo} width={120} />
              </Col>
              <Col span={17}>
                <p className={"formTitle"}>SEKDA</p>
                <p className={"formSubTitle"}>
                  Sistem Kearsipan Dinas Arsip dan Perpustakaan Kota Semarang
                </p>
              </Col>
            </Row>
            <Divider style={{ marginTop: "15px" }} />
            <Row>
              <Form className="login-form">
                {register && (
                  <Form.Item
                    validateStatus={
                      !!(formik.errors.userName && formik.touched.userName)
                        ? "error"
                        : "validating"
                    }
                    help={
                      formik.errors.userName && formik.touched.userName
                        ? formik.errors.userName
                        : ""
                    }
                  >
                    <Input
                      id={"userNameInputForm"}
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="username"
                      name={"userName"}
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                      onFocus={formik.handleBlur}
                      size={"large"}
                    />
                  </Form.Item>
                )}
                <Form.Item
                  validateStatus={
                    !!(formik.errors.email && formik.touched.email) && register
                      ? "error"
                      : "validating"
                  }
                  help={
                    formik.errors.email && formik.touched.email && register
                      ? formik.errors.email
                      : ""
                  }
                >
                  <Input
                    id={"emailInputForm"}
                    prefix={
                      <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Email"
                    name={"email"}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onFocus={formik.handleBlur}
                    size={"large"}
                  />
                </Form.Item>
                <Form.Item
                  validateStatus={
                    !!(formik.errors.password && formik.touched.password) &&
                    register
                      ? "error"
                      : "validating"
                  }
                  help={
                    formik.errors.password &&
                    formik.touched.password &&
                    register
                      ? formik.errors.password
                      : ""
                  }
                >
                  <Input
                    id={"passwordInputForm"}
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                    name={"password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onFocus={formik.handleBlur}
                    size={"large"}
                  />
                </Form.Item>
                <Form.Item>
                  {register ? (
                    <Button
                      disabled={!formik.isValid}
                      onClick={registerAction}
                      size="default"
                      shape="round"
                      className="RegisterButton"
                    >
                      Register
                    </Button>
                  ) : (
                    <Button
                      onClick={loginAction}
                      size="default"
                      shape="round"
                      className="RegisterButton"
                    >
                      Login
                    </Button>
                  )}
                </Form.Item>
                <p
                  style={{
                    fontSize: "10px",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  {errorAuth}
                </p>
              </Form>
            </Row>
            <Divider style={{ marginBottom: "5px", marginTop: "5px" }} />
            <Row>
              {register ? (
                <p className={"formSubTitleInfo"}>
                  Already have account ?{" "}
                  <a
                    onClick={() => {
                      authTypeTriger(false);
                    }}
                  >
                    {" "}
                    Log In
                  </a>{" "}
                </p>
              ) : (
                <p className={"formSubTitleInfo"}>
                  Don't have account ?{" "}
                  <a
                    onClick={() => {
                      authTypeTriger(true);
                    }}
                  >
                    {" "}
                    Register
                  </a>{" "}
                </p>
              )}
            </Row>
          </Card>
        </Col>
      </Row>
      <Loading visible={loading} />
      <ModalClick
        title={modal.title}
        image={modal.image}
        mainButton={modal.mainButton}
        visible={modal.visible}
      />
    </div>
  );
};

export default Landing;
