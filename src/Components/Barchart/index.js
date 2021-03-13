import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Link, useLocation } from "react-router-dom";
import DynamicData from "../../DynamicData";
import "./Barchart.css";

const BarChartComponent = (props) => {
  const { webType, arrData } = props;
  const isMobile = window.innerWidth <= 600;
  let sortTipeARsip = arrData.reduce((acc, element) => {
    const tipeArsipKeyIndex = Object.keys(element).findIndex(
      (e) => e == "tipeArsip"
    );
    const [key, value] = Object.entries(element)[tipeArsipKeyIndex];
    if (acc[value] == undefined) {
      acc[value] = 1;
    } else {
      acc[value] = acc[value] + 1;
    }
    return acc;
  }, {});
  const data = Object.keys(sortTipeARsip).map((key) => ({
    name: key.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
      return str.toUpperCase();
    }),
    jumlah: Number(sortTipeARsip[key]),
  }));
  const Color = DynamicData[webType].color.chartColor;

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          height={isMobile ? 140 : 400}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: isMobile ? -40 : 0,
            bottom: 20,
          }}
        >
          <XAxis
            dataKey="name"
            tick={{ fontSize: isMobile ? 8 : 12 }}
            interval={0}
            angle={isMobile ? 90 : 0}
            dx={isMobile ? 5 : 0}
            dy={isMobile ? 15 : 0}
          />
          <YAxis tick={{ fontSize: isMobile ? 8 : 12 }} />
          <Tooltip />
          <Bar dataKey="jumlah">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={Color[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
