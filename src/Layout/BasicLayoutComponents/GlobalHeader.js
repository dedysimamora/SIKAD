import React from 'react'
import { Layout, Icon } from 'antd';
const { Header } = Layout;

const GlobalHeader = (props) => {
    const { collapsed, toogle} = props
    return (
        <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={toogle}
            />
        </Header>
    )
}

export default GlobalHeader
