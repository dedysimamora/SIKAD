import React, { useState, useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import HelperFunction from "../Commons/HelperFunction";
import SampleImage from "../Assets/Images/sample.jpg";
import PdfBackground from "../Assets/Images/pdfBackground.png";
import PoppinsBold from "../Assets/Font/Poppins-Bold.ttf";
import PoppinsMedium from "../Assets/Font/Poppins-Medium.ttf";

const PdfTemplate = (props) => {
  const { data } = props;
  const [imageData, SetImageData] = useState(null);

  Font.register({
    family: "Poppins",
    fonts: [{ src: PoppinsBold }, { src: PoppinsMedium, fontStyle: "thin" }],
  });

  return (
    <Document>
      <Page
        size="A4"
        style={{ flexDirection: "column", backgroundColor: "#ffffff" }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: 450,
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "85%", position: "absolute" }}
            src={data.foto !== null ? data.foto : ""}
          />
        </View>
        <Image
          style={{ width: "100%", height: "100%", position: "absolute" }}
          src={PdfBackground}
        />
        <View style={{}}>
          <Text
            style={{
              fontSize: 40,
              fontFamily: "Poppins",
              color: "#001529",
              marginLeft: 120,
              marginTop: -20,
            }}
          >
            Detail Arsip
          </Text>
        </View>

        <View
          style={{
            height: 4,
            backgroundColor: "#001529",
            marginLeft: 120,
            marginRight: 200,
          }}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 120,
            marginTop: 20,
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                width: "25%",
                marginLeft: 25,
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Poppins",
                  fontStyle: "thin",
                  color: "#001529",
                }}
              >
                Nomor Definitif :{" "}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "Poppins",
                  color: "#1A74BC",
                  marginTop: -5,
                }}
              >
                {data.noDefinitif}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                width: "25%",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Poppins",
                  fontStyle: "thin",
                  color: "#001529",
                }}
              >
                Nomor Klasifikasi :{" "}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "Poppins",
                  color: "#1A74BC",
                  marginTop: -5,
                }}
              >
                {data.noKlasifikasi}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                width: "40%",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Poppins",
                  fontStyle: "thin",
                  color: "#001529",
                }}
              >
                Tanggal Simpan :{" "}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "Poppins",
                  color: "#1A74BC",
                  marginTop: -5,
                }}
              >
                {data.tanggalSimpan}
              </Text>
            </View>
          </View>

          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                width: "25%",
                marginLeft: 25,
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Poppins",
                  fontStyle: "thin",
                  color: "#001529",
                }}
              >
                Kualitas Foto:{" "}
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: "Poppins",
                  color: "#1A74BC",
                  marginTop: -5,
                }}
              >
                {data.kualitasFoto ? "Baik" : "Buruk"}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                width: "25%",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Poppins",
                  fontStyle: "thin",
                  color: "#001529",
                }}
              >
                Ukuran Foto :{" "}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins",
                  color: "#1A74BC",
                  marginTop: -5,
                }}
              >{`${data.panjangFoto} X ${data.lebarFoto} Cm`}</Text>
            </View>

            <View
              style={{
                display: "flex",
                justifyContent: "center",
                width: "50%",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Poppins",
                  fontStyle: "thin",
                  color: "#001529",
                }}
              >
                Tempat Simpan :{" "}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins",
                  color: "#1A74BC",
                  marginTop: -5,
                }}
              >
                {data.tempatSimpan}
              </Text>
            </View>
          </View>

          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                width: "25%",
                marginLeft: 25,
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Poppins",
                  fontStyle: "thin",
                  color: "#001529",
                }}
              >
                Hak Cipta :{" "}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins",
                  color: "#1A74BC",
                  marginTop: -5,
                }}
              >
                {data.hakCipta}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                width: "25%",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Poppins",
                  fontStyle: "thin",
                  color: "#001529",
                }}
              >
                Lokasi Tempat :{" "}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins",
                  color: "#1A74BC",
                  marginTop: -5,
                }}
              >
                {data.lokasiTempat}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                width: "40%",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Poppins",
                  fontStyle: "thin",
                  color: "#001529",
                }}
              >
                Indeks :{" "}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins",
                  color: "#1A74BC",
                  marginTop: -5,
                }}
              >
                {data.indeks}
              </Text>
            </View>
          </View>

          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                width: "90%",
                marginLeft: 25,
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Poppins",
                  fontStyle: "thin",
                  color: "#001529",
                }}
              >
                Keterangan :{" "}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Poppins",
                  color: "#1A74BC",
                  marginTop: -5,
                }}
              >
                {data.keterangan}
              </Text>
            </View>
          </View>

          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                width: "90%",
                marginLeft: 25,
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Poppins",
                  fontStyle: "thin",
                  color: "#001529",
                }}
              >
                Uraian Informasi :{" "}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Poppins",
                  color: "#1A74BC",
                  marginTop: -5,
                }}
              >
                {data.uraianInformasi}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 7,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 9, color: "white" }}>
            Dokumen ini dibuat seacara otomatis oleh Sistem Kearsipan Dinas
            Lingkungan Hidup Dan Kehutanan Provinsi Jawa Tengah{" "}
          </Text>
        </View>

        {/* <View style={{display: 'flex', flexDirection:'column', marginTop:20}}>
                        <Text style={{fontSize:7, fontFamily:'Poppins', fontStyle:'thin', color:'#001529', marginLeft: 120,}}>Nomor Klarifikasi : </Text>
                        <Text style={{fontSize:30, fontFamily:'Poppins',fontStyle:'thin', color:'#1A74BC', marginLeft: 120, marginTop: -5 }}>349543</Text>
                </View> */}
      </Page>
    </Document>
  );
};

export default PdfTemplate;
