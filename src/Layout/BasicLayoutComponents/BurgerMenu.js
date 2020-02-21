import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import MainLogo from "../../Components/MainLogo"
const {Sider} = Layout;

const BurgerMenu = (props) => {
    const {collapsed} = props
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} width={225} breakpoint={'xs'}>
            <div className="logo">
                <MainLogo collapsed={collapsed} />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                <Icon type="bar-chart" />
                <span>Menu Utama</span>
                </Menu.Item>
                <Menu.Item key="2">
                <Icon type="database" />
                <span>Arsip</span>
                </Menu.Item>
                <Menu.Item key="3">
                <Icon type="user" />
                <span>Profile</span>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default BurgerMenu
