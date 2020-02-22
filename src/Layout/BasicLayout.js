import React, {useState} from 'react'
import { Layout } from 'antd';
import BurgerMenu from "./BasicLayoutComponents/BurgerMenu";
import GlobalHeader from "./BasicLayoutComponents/GlobalHeader";
import Dashboard from "../Containers/Dashboard"
import Arsip from "../Containers/Arsip"
import Profile from "../Containers/Profile"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./BasicLayout.css"
const { Content } = Layout;


const BasicLayout = () => {
    const [collapsed, setCollapsed] = useState(false)
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
                    <Content
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                        }}
                    >
                        
                        <Switch>
                            <Route path="/dashboard" exact component={Dashboard} />
                            <Route path="/profile" exact component={Profile} />
                            <Route path="/arsip" exact component={Arsip} />
                            <Route path="/arsip/:type" exact component={Arsip} />
                        </Switch>

                    </Content>
                </Layout>
            </Router>
       </Layout>
    )
}

export default BasicLayout
