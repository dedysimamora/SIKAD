import React from "react";
import ReactExport from "react-data-export";
import { Button } from "antd";
import DynamicData from "../DynamicData";

const EcelExport = (props) => {
  const isMobile = window.innerWidth <= 600;
  const isMobileLandscape = window.innerWidth <= 900;
  const { data, fileName, webType } = props;
  const ReorderObject = DynamicData[webType].generateExcelData(data);

  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

  const colomStyle = {
    alignment: { vertical: "center", horizontal: "center" },
    font: {
      bold: true,
      color: { rgb: `${DynamicData[webType].color.thirdColorRGBA}` },
    },
    fill: {
      patternType: "solid",
      fgColor: { rgb: `${DynamicData[webType].color.mainColorRGBA}` },
    },
    border: {
      top: {
        style: "thick",
        color: { rgb: `${DynamicData[webType].color.mainColorRGBA}` },
      },
      bottom: { style: "thick", color: { rgb: "000000" } },
      left: {
        style: "thick",
        color: { rgb: `${DynamicData[webType].color.mainColorRGBA}` },
      },
      right: {
        style: "thick",
        color: { rgb: `${DynamicData[webType].color.mainColorRGBA}` },
      },
    },
  };

  const rowStyle = {
    alignment: { vertical: "center", horizontal: "center", wrapText: true },
    border: {
      top: { style: "medium", color: { rgb: "000000" } },
      bottom: { style: "medium", color: { rgb: "000000" } },
      left: { style: "medium", color: { rgb: "000000" } },
      right: { style: "medium", color: { rgb: "000000" } },
    },
  };

  const customSheet = [
    {
      columns: DynamicData[webType].excelColumn(colomStyle),
      data: ReorderObject.map((arsipObj) =>
        Object.values(arsipObj).map((v) => ({ value: v, style: rowStyle }))
      ),
    },
  ];
  return (
    <ExcelFile
      element={
        <Button
          style={{
            backgroundColor: `${DynamicData[webType].color.mainColor}`,
            color: `${DynamicData[webType].color.thirdColor}`,
            fontWeight: "700",
            width: "100%",
            marginLeft: isMobileLandscape ? "-20px" : "0px",
            fontSize: isMobile || isMobileLandscape ? "8px" : "12px",
          }}
        >
          Unduh Arsip
        </Button>
      }
      filename={`Arsip - ${fileName}`}
    >
      <ExcelSheet dataSet={customSheet} name={fileName} />
    </ExcelFile>
  );
};

export default EcelExport;
