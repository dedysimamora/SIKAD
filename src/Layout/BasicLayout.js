import React, {useState, useEffect} from 'react'
import { Layout } from 'antd';
import BurgerMenu from "./BasicLayoutComponents/BurgerMenu";
import GlobalHeader from "./BasicLayoutComponents/GlobalHeader";
import Dashboard from "../Containers/Dashboard"
import Arsip from "../Containers/Arsip"
import Profile from "../Containers/Profile"
import GetWindowSize from "../Commons/GetWindowSize"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./BasicLayout.css"
const { Content } = Layout;


const BasicLayout = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const { width } = GetWindowSize();


    useEffect(() => {
        if(width <= 600) {
            setIsMobile(true)
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
                    <Content
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 500,
                        }}
                    >
                        
                        <Switch>
                    <Route path="/dashboard" exact render={(props) => <Dashboard {...props} isMobile={isMobile}/>} />
                            <Route path="/profile" exact render={(props) => <Profile {...props} isMobile={isMobile}/>} />
                            <Route path="/arsip" exact render={(props) => <Arsip {...props} isMobile={isMobile}/>} />
                            <Route path="/arsip/:type" exact  render={(props) => <Arsip {...props} isMobile={isMobile}/>} />
                        </Switch>

                    </Content>
                </Layout>
            </Router>
       </Layout>
    )
}

export default BasicLayout
