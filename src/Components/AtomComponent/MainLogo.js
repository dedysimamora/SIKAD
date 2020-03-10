import React from 'react'
import { Row, Col } from 'antd';
import LogoDinas from "../../Assets/Images/logo-dinas.png"
import "./MainLogo.css"

const MainLogo = (props) => {
    const { collapsed } = props
    return (
        <div>
            <Row className={"MainLogoContainer"}>
            { !collapsed &&
                <Col span={6}>
                    <img src={LogoDinas} width={"100%"} className={"MainLogoImage"} alt={"SIKAD"}/>
                </Col>
            }
            <Col span={!collapsed ? 18 : 24}>
                <p className={!collapsed ? "MainLogoTitleCollapsed" : "MainLogoTitle"  }>
                    SIKAD
                </p>
                <p className={!collapsed ? "MainLogoSubTitleCollapsed" : "MainLogoSubTitle"}>
                    Sistem Kearsipan Dinas Lingkungan Hidup Dan Kehutanan Provinsi Jawa Tengah
                </p>
            </Col>
            </Row>
        </div>
    )
}

export default MainLogo
