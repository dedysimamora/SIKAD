import React from "react";
import { Row, Col } from "antd";
import LogoDinas from "../../Assets/Images/semarang.png";
import "./MainLogo.css";

const MainLogo = (props) => {
  const { collapsed } = props;
  return (
    <div>
      <Row className={"MainLogoContainer"}>
        {!collapsed && (
          <Col span={6}>
            <img
              src={LogoDinas}
              width={80}
              className={"MainLogoImage"}
              alt={"SIKAD"}
            />
          </Col>
        )}
        <Col span={!collapsed ? 18 : 24}>
          <p
            className={!collapsed ? "MainLogoTitleCollapsed" : "MainLogoTitle"}
          >
            SEKDA
          </p>
          <p
            className={
              !collapsed ? "MainLogoSubTitleCollapsed" : "MainLogoSubTitle"
            }
          >
            Sistem Kearsipan Dinas Arsip dan Perpustakaan Kota Semarang
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default MainLogo;
