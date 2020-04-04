import React, {useState, useEffect} from 'react'
import { Layout } from 'antd';
import BurgerMenu from "./BasicLayoutComponents/BurgerMenu";
import GlobalHeader from "./BasicLayoutComponents/GlobalHeader";
import Dashboard from "../Containers/Dashboard"
import InputData from "../Containers/InputData"
import EditData from "../Containers/EditData"
import Arsip from "../Containers/Arsip"
import Profile from "../Containers/Profile"
import GetWindowSize from "../Commons/GetWindowSize"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import "./BasicLayout.css"
import { Provider } from "react-redux";
import store, { history } from "../store";
const { Content } = Layout;

const BasicLayout = () => {
    const [collapsed, setCollapsed] = useState(false)
    const { width } = GetWindowSize();


    useEffect(() => {
        if(width <= 600) {
            setCollapsed(true)
        }
    }, [width])


    const toogle = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Layout style={{ height : '100vh'}}>
            <Router>
                <BurgerMenu collapsed={collapsed} />
                <Layout>
                    <GlobalHeader 
                        collapsed={collapsed} 
                        toogle={toogle}
                    />
                    {
                        width <= 600 && !collapsed ? null : (
                        
                    <Content
                        style={{
                        margin: '24px 16px 0', overflow: 'initial' 
                        }}
                    >
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            
                                    <Switch>  
                                        <Route exact path="/sikad/" render={() => (
                                            <Redirect to="/sikad/dashboard"/>
                                        )}/> 
                                        <Route path="/sikad/dashboard" exact component={Dashboard} />
                                        <Route path="/sikad/profile" exact component={Profile}  />
                                        <Route path="/sikad/arsip" exact component={Arsip}  />
                                        <Route path="/sikad/arsip/:type" exact  component={Arsip} />
                                        <Route path="/sikad/tambah-data" exact  component={InputData} />
                                        <Route path="/sikad/ubah-data/:arsipId" exact  component={EditData} />
                                    </Switch>
                        </div>

                    </Content>)
                    }
                </Layout>
            </Router>
       </Layout>
    )
}

export default BasicLayout
