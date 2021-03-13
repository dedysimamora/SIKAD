import React, { useState } from "react";
import { Layout, Icon, Row, Col, Avatar, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import DynamicData from "../../DynamicData";
const { Header } = Layout;

const GlobalHeader = (props) => {
  const { collapsed, toogle, webType } = props;
  const [popOverVisible, setPopOverVisible] = useState(false);
  const isMobile = window.innerWidth <= 600;

  const popUpVisibleChange = (value) => {
    setPopOverVisible(value);
  };
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = `/${DynamicData[webType].title}-login`;
  };
  const content = (
    <div>
      <span onClick={logout}>
        <p
          style={{
            fontSize: isMobile ? "12px" : "16px",
            fontWeight: "bold",
            color: `${DynamicData[webType].color.mainColor}`,
            marginBottom: "0px",
            cursor: "context-menu",
          }}
        >
          Logout
        </p>
      </span>
    </div>
  );

  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <Row>
        <Col md={{ span: 8 }} xs={{ span: 4 }}>
          <Icon
            className="trigger"
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={toogle}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
          md={{ span: 8, offset: 8 }}
          xs={{ span: 20 }}
        >
          {isMobile && !collapsed ? null : (
            <div style={{ marginRight: "20px" }}>
              <Popover
                content={content}
                trigger="click"
                visible={popOverVisible}
                onVisibleChange={popUpVisibleChange}
              >
                <Avatar
                  style={{
                    backgroundColor: `${DynamicData[webType].color.mainColor}`,
                  }}
                  size={isMobile ? 20 : 40}
                  icon={<UserOutlined />}
                />
                <p
                  style={{
                    display: "inline",
                    fontSize: isMobile ? "9px" : "15px",
                    fontWeight: "bold",
                    color: "#001529",
                    marginLeft: isMobile ? "5px" : "10px",
                    cursor: "context-menu",
                  }}
                >
                  {localStorage.getItem("token")
                    ? JSON.parse(localStorage.getItem("token")).userName
                    : ""}
                </p>
              </Popover>
            </div>
          )}
        </Col>
      </Row>
    </Header>
  );
};

export default GlobalHeader;
