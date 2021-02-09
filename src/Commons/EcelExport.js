import React from "react";
import ReactExport from "react-data-export";
import { Button } from "antd";

const EcelExport = (props) => {
  const isMobile = window.innerWidth <= 600;
  const isMobileLandscape = window.innerWidth <= 900;
  const { data, fileName } = props;
  console.log(data, "<<<<<<<<<<<<<<<Databb");
  const ReorderObject = data.map((data) => ({
    No: data.noDefinitif,
    "Kode Klarifikasi": data.noKlasifikasi,
    Indeks: data.indeks,
    "No Boks": data.noBoks,
    "Uraian Informasi": data.uraianInformasi,
    Retensi: data.retensi,
    "Tempat Simpan": data.tempatSimpan,
    Waktu: data.tanggalArsip,
    "Ukuran ": `${data.panjangFoto} Cm X ${data.lebarFoto} Cm`,
    Kualitas: data.kualitasFoto ? "Baik" : "Buruk",
    Keterangan: data.keterangan,
  }));

  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

  const colomStyle = {
    alignment: { vertical: "center", horizontal: "center" },
    font: { bold: true, color: { rgb: "FFFFFF" } },
    fill: { patternType: "solid", fgColor: { rgb: "#001529" } },
    border: {
      top: { style: "thick", color: { rgb: "000000" } },
      bottom: { style: "thick", color: { rgb: "000000" } },
      left: { style: "thick", color: { rgb: "000000" } },
      right: { style: "thick", color: { rgb: "000000" } },
    },
  };

  const rowStyle = {
    alignment: { vertical: "center", horizontal: "center" },
    border: {
      top: { style: "medium", color: { rgb: "000000" } },
      bottom: { style: "medium", color: { rgb: "000000" } },
      left: { style: "medium", color: { rgb: "000000" } },
      right: { style: "medium", color: { rgb: "000000" } },
    },
  };

  const customSheet = [
    {
      columns: [
        { title: "No", style: colomStyle, width: { wch: 4 } },
        { title: "Kode Klasifikasi", style: colomStyle, width: { wch: 14 } },
        { title: "Indeks", style: colomStyle, width: { wch: 20 } },
        { title: "No Boks", style: colomStyle, width: { wch: 15 } },
        { title: "Uraian Informasi", style: colomStyle, width: { wch: 50 } },
        { title: "Retensi", style: colomStyle, width: { wch: 15 } },
        { title: "Tempat Simpan", style: colomStyle, width: { wch: 15 } },
        { title: "Waktu", style: colomStyle, width: { wch: 12 } },
        { title: "Ukuran ", style: colomStyle, width: { wch: 15 } },
        { title: "Kualitas", style: colomStyle, width: { wch: 7 } },
        { title: "Keterangan", style: colomStyle, width: { wch: 50 } },
      ],
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
            backgroundColor: "#001529",
            color: "white",
            width: "100%",
            marginLeft: isMobileLandscape ? "-20px" : "0px",
            fontSize: isMobile || isMobileLandscape ? "8px" : "12px",
          }}
        >
          Unduh Arsip
        </Button>
      }
      filename={`Arsip${fileName}`}
    >
      <ExcelSheet dataSet={customSheet} name="Organization" />
    </ExcelFile>
  );
};

export default EcelExport;
