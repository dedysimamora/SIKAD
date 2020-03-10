import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import {Link} from "react-router-dom"
import MainLogo from "../../Components/AtomComponent/MainLogo"
const {Sider} = Layout;
const { SubMenu } = Menu;


const BurgerMenu = (props) => {
    const {collapsed} = props
    return (
        <Sider style={{zIndex:1000}} trigger={null} collapsible collapsed={collapsed} width={225} breakpoint={'xs'}>
            <div className="logo">
                <MainLogo collapsed={collapsed} />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to='/'>
                        <Icon type="bar-chart" />
                        <span>Menu Utama</span>
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="2"
                    title={
                        <Link to='/arsip'>
                            <span>
                                <Icon type="database" />
                                <span>Arsip</span>
                            </span>
                        </Link>
                    }
                >
                    <Menu.Item key="3">
                        <Link to='/arsip/personal-file'>
                            <Icon type="file-text" />
                            <span>Personal File</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to='/arsip/foto'>
                            <Icon type="picture" />
                            <span>Foto</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to='/arsip/video'>
                            <Icon type="play-square" />
                            <span>Video</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to='/arsip/surat-masuk'>
                            <Icon type="file-text" />
                            <span>Surat Masuk</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link to='/arsip/surat-keluar'>
                            <Icon type="picture" />
                            <span>Surat Keluar</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link to='/arsip/kartografi'>
                            <Icon type="play-square" />
                            <span>Kartografi</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                    <Link to='/tambah-data'>
                        <Icon type="file-add" />
                        <span>Tambah Data</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="10">
                    <Link to='/profile'>
                        <Icon type="user" />
                        <span>Profile</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}



export default BurgerMenu
