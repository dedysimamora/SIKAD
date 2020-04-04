import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link, useLocation } from "react-router-dom";
import MainLogo from "../../Components/AtomComponent/MainLogo"
const {Sider} = Layout;
const { SubMenu } = Menu;


const BurgerMenu = (props) => {
    const {collapsed} = props
    const { pathname } = useLocation();
    
    return (
        <Sider style={{zIndex:1000}} trigger={null} collapsible collapsed={collapsed} width={225} breakpoint={'xs'}>
            <div className="logo">
                <MainLogo collapsed={collapsed} />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["/dashboard"]} selectedKeys={pathname}>
                <Menu.Item key="/sikad/dashboard">
                    <Link to={{pathname : '/sikad/dashboard'}}>
                        <Icon type="bar-chart" />
                        <span>Menu Utama</span>
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="/sikad/arsip"
                    title={
                        <Link to={{pathname : '/sikad/arsip'}}>
                            <span>
                                <Icon type="database" />
                                <span>Arsip</span>
                            </span>
                        </Link>
                    }
                >
                    <Menu.Item key="/sikad/arsip/personal-file">
                        <Link to={{pathname : '/sikad/arsip/personal-file'}}>
                            <Icon type="file-text" />
                            <span>Personal File</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/sikad/arsip/foto">
                        <Link to={{pathname : '/sikad/arsip/foto'}}>
                            <Icon type="picture" />
                            <span>Foto</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/sikad/arsip/video">
                        <Link to={{pathname : '/sikad/arsip/video'}}>
                            <Icon type="play-square" />
                            <span>Video</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/sikad/arsip/surat-masuk">
                        <Link to={{pathname : '/sikad/arsip/surat-masuk'}}>
                            <Icon type="file-text" />
                            <span>Surat Masuk</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/sikad/arsip/surat-keluar">
                        <Link to={{pathname : '/sikad/arsip/surat-keluar'}}>
                            <Icon type="picture" />
                            <span>Surat Keluar</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/sikad/arsip/kartografi">
                        <Link to={{pathname : '/sikad/arsip/kartografi'}}>
                            <Icon type="play-square" />
                            <span>Kartografi</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="/sikad/tambah-data">
                    <Link  to={{pathname : '/sikad/tambah-data'}}>
                        <Icon type="file-add" />
                        <span>Tambah Data</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/sikad/profile">
                    <Link to={{pathname : '/sikad/profile'}}>
                        <Icon type="user" />
                        <span>Profile</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}



export default BurgerMenu
