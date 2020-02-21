import React, {useState} from 'react'
import { Layout } from 'antd';
import BurgerMenu from "./BasicLayoutComponents/BurgerMenu";
import GlobalHeader from "./BasicLayoutComponents/GlobalHeader";
import Dashboard from "../Containers/Dashboard"
import "./BasicLayout.css"
const { Content } = Layout;


const BasicLayout = () => {
    const [collapsed, setCollapsed] = useState(false)
    const toogle = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Layout style={{ height : '100vh'}}>
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
                    <Dashboard />
                </Content>
            </Layout>
       </Layout>
    )
}

export default BasicLayout
