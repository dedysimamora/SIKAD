import React, { useState, useEffect } from "react";
import DocumentCard from "../Components/AtomComponent/DocumentCard";
import { Col, Row, Modal, Spin, Empty } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Barchart from "../Components/Barchart";
import PieChart from "../Components/PieChart";
import Loader from "react-loader-spinner";
import DynamicData from "../DynamicData";
import "./Dashboard.css";

const Dashboard = ({ webType }) => {
  const dispatch = useDispatch();
  const [loading, SetLoading] = useState(false);
  const AllArsip = useSelector((state) => state.arsip.data);
  // const AllArsip = "asd"

  useEffect(() => {
    dispatch.arsip.getAllArsip(webType);
  }, []);

  return AllArsip !== null ? (
    <Row>
      {AllArsip.length == 0 ? (
        <Col md={{ span: 24 }} xs={{ span: 24 }}>
          <div
            style={{
              height: "450px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Empty />
          </div>
        </Col>
      ) : (
        <>
          <Col md={{ span: 8 }} xs={{ span: 24 }}>
            <PieChart arrData={AllArsip} webType={webType} />
          </Col>
          <Col md={{ span: 16 }} xs={{ span: 24 }}>
            <Barchart arrData={AllArsip} webType={webType} />
          </Col>
        </>
      )}
    </Row>
  ) : (
    <div className="sweet-loading">
      <Loader
        type="Puff"
        color={`${DynamicData[webType].color.mainColor}`}
        height={100}
        width={100}
      />
    </div>
  );
};

export default Dashboard;
