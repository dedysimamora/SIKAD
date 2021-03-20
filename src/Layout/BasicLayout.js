import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import BurgerMenu from "./BasicLayoutComponents/BurgerMenu";
import GlobalHeader from "./BasicLayoutComponents/GlobalHeader";
import Dashboard from "../Containers/Dashboard";
import InputData from "../Containers/InputData";
import DynamicForm from "../Containers/DynamicForm";
import EditData from "../Containers/EditData";
import Arsip from "../Containers/Arsip";
import Profile from "../Containers/Profile";
import GetWindowSize from "../Commons/GetWindowSize";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./BasicLayoutComponents/PrivateRoute";
import { ConnectedRouter } from "connected-react-router";
import "./BasicLayout.css";
import { Provider } from "react-redux";
import store, { history } from "../store";
import DynamicData from "../DynamicData";
const { Content } = Layout;

const BasicLayout = ({ webType }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { width } = GetWindowSize();

  useEffect(() => {
    if (width <= 600) {
      setCollapsed(true);
    }
  }, [width]);

  // useEffect(() => {
  //     console.log("kena woi use effect nya");

  //     if(localStorage.getItem('token') == null){
  //         window.location.href = "/";
  //     }
  // }, [localStorage.getItem('token')])

  const toogle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Router>
        <BurgerMenu collapsed={collapsed} webType={webType} />
        <Layout>
          <GlobalHeader
            collapsed={collapsed}
            toogle={toogle}
            webType={webType}
          />
          {width <= 600 && !collapsed ? null : (
            <Content
              style={{
                margin: "24px 16px 0",
                overflow: "initial",
              }}
            >
              <div
                style={{ padding: 24, background: "#fff", textAlign: "center" }}
              >
                <Switch>
                  <Route
                    exact
                    path="/sikad/"
                    render={() => <Redirect to="/sikad/dashboard" />}
                  />
                  <Route
                    path="/sikad/dashboard"
                    exact
                    render={() => <Dashboard webType={"SIKAD"} />}
                  />
                  <Route
                    path="/sikad/arsip"
                    exact
                    render={(props) => (
                      <Arsip
                        webType={"SIKAD"}
                        filtered={true}
                        column={"column"}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/sikad/arsip/:type"
                    exact
                    render={(props) => (
                      <Arsip
                        webType={"SIKAD"}
                        filtered={true}
                        column={"column"}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/sikad/tambah-data"
                    exact
                    render={(props) => (
                      <InputData webType={"SIKAD"} {...props} />
                    )}
                  />
                  <Route
                    path="/sikad/ubah-data/:arsipId"
                    exact
                    component={EditData}
                  />

                  <Route
                    exact
                    path="/sekda/"
                    render={() => <Redirect to="/sekda/dashboard" />}
                  />
                  <Route
                    path="/sekda/dashboard"
                    exact
                    render={() => <Dashboard webType={"SEKDA"} />}
                  />
                  <Route
                    path="/sekda/arsip"
                    exact
                    render={(props) => (
                      <Arsip
                        webType={"SEKDA"}
                        filtered={true}
                        column={"column"}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/sekda/arsip/:type"
                    exact
                    render={(props) => (
                      <Arsip
                        webType={"SEKDA"}
                        filtered={true}
                        column={"column"}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/sekda/tambah-data"
                    exact
                    render={(props) => (
                      <DynamicForm webType={"SEKDA"} type={"add"} {...props} />
                    )}
                  />
                  <Route
                    path="/sekda/ubah-data/:arsipId"
                    exact
                    render={(props) => (
                      <DynamicForm webType={"SEKDA"} type={"edit"} {...props} />
                    )}
                  />

                  <Route
                    exact
                    path="/siakum/"
                    render={() => <Redirect to="/siakum/dashboard" />}
                  />
                  <Route
                    path="/siakum/dashboard"
                    exact
                    render={() => <Dashboard webType={"SIAKUM"} />}
                  />
                  <Route
                    path="/siakum/arsip"
                    exact
                    render={(props) => (
                      <Arsip
                        webType={"SIAKUM"}
                        filtered={true}
                        column={"column"}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/siakum/arsip/:type"
                    exact
                    render={(props) => (
                      <Arsip
                        webType={"SIAKUM"}
                        filtered={true}
                        column={"column"}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/siakum/tambah-data"
                    exact
                    render={(props) => (
                      <DynamicForm webType={"SIAKUM"} type={"add"} {...props} />
                    )}
                  />
                  <Route
                    path="/siakum/ubah-data/:arsipId"
                    exact
                    render={(props) => (
                      <DynamicForm
                        webType={"SIAKUM"}
                        type={"edit"}
                        {...props}
                      />
                    )}
                  />

                  {/* start taksi route */}
                  <Route
                    exact
                    path="/taksi/"
                    render={() => <Redirect to="/taksi/dashboard" />}
                  />
                  <Route
                    path="/taksi/dashboard"
                    exact
                    render={() => <Dashboard webType={"TAKSI"} />}
                  />
                  <Route
                    path="/taksi/arsip"
                    exact
                    render={(props) => (
                      <Arsip
                        webType={"TAKSI"}
                        filtered={true}
                        column={"column"}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/taksi/arsip/:type"
                    exact
                    render={(props) => (
                      <Arsip
                        webType={"TAKSI"}
                        filtered={true}
                        column={"column"}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/taksi/kode-klasifikasi"
                    exact
                    render={(props) => (
                      <Arsip
                        webType={"TAKSI"}
                        filtered={false}
                        column={"column2"}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/taksi/tambah-data"
                    exact
                    render={(props) => (
                      <DynamicForm webType={"TAKSI"} type={"add"} {...props} />
                    )}
                  />
                  <Route
                    path="/taksi/ubah-data/:arsipId"
                    exact
                    render={(props) => (
                      <DynamicForm webType={"TAKSI"} type={"edit"} {...props} />
                    )}
                  />
                </Switch>
              </div>
            </Content>
          )}
        </Layout>
      </Router>
    </Layout>
  );
};

export default BasicLayout;
