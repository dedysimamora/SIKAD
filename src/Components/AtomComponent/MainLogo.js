import React from "react";
import { Row, Col } from "antd";
import LogoDinas from "../../Assets/Images/logo-dinas.png";
import "./MainLogo.css";
import DynamicData from "../../DynamicData";

const MainLogo = (props) => {
  const { collapsed, webType } = props;
  return (
    <div>
      <Row className={"MainLogoContainer"}>
        {!collapsed && (
          <Col span={6}>
            <img
              src={DynamicData[webType].logo}
              width={DynamicData[webType].logoWidthNavbar}
              className={"MainLogoImage"}
              alt={webType}
            />
          </Col>
        )}
        <Col
          span={!collapsed ? 18 : 24}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            className={!collapsed ? "MainLogoTitleCollapsed" : "MainLogoTitle"}
            style={{ color: `${DynamicData[webType].color.thirdColor}` }}
          >
            {webType}
          </p>
          <p
            className={
              !collapsed ? "MainLogoSubTitleCollapsed" : "MainLogoSubTitle"
            }
            style={{ color: `${DynamicData[webType].color.thirdColor}` }}
          >
            {DynamicData[webType].subTitle}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default MainLogo;
