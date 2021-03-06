import Constant from "./constant";

let DynamicData = {};

DynamicData[Constant.SIKAD] = {
  title: "sikad",
  subTitle:
    "Sistem Kearsipan Dinas Lingkungan Hidup Dan Kehutanan Provinsi Jawa Tengah",
  logo: "/images/logo-dinas.png",
  color: {
    mainColor: "#001529",
    secondColor: "#000C17",
    thirdColor: "#FFFFFF",
  },
  menu: [
    {
      title: "Menu Utama",
      pathName: "/sikad/dashboard",
      icon: "bar-chart",
      childMenu: [],
    },
    {
      title: "Arsip",
      pathName: "/sikad/arsip",
      icon: "database",
      childMenu: [
        {
          title: "Personal File",
          pathName: "/sikad/arsip/personal-file",
          icon: "file-text",
          childMenu: [],
        },
        {
          title: "Foto",
          pathName: "/sikad/arsip/foto",
          icon: "picture",
          childMenu: [],
        },
        {
          title: "Video",
          pathName: "/sikad/arsip/video",
          icon: "play-square",
          childMenu: [],
        },
        {
          title: "Surat Masuk",
          pathName: "/sikad/arsip/surat-masuk",
          icon: "file-text",
          childMenu: [],
        },
        {
          title: "Surat Keluar",
          pathName: "/sikad/arsip/surat-keluar",
          icon: "file-text",
          childMenu: [],
        },
        {
          title: "Kartografi",
          pathName: "/sikad/arsip/kartografi",
          icon: "file-text",
          childMenu: [],
        },
      ],
    },
    {
      title: "Tambah Data",
      pathname: "/sikad/tambah-data",
      icon: "file-add",
      childMenu: [],
    },
  ],
};

DynamicData[Constant.SEKDA] = {
  title: "sekda",
  subTitle: "Sistem Kearsipan Dinas Arsip dan Perpustakaan Kota Semarang",
  logo: "/images/semarang.png",
  color: {
    mainColor: "#BBBBBB",
    secondColor: "#AAAAAA",
    thirdColor: "#222222",
  },
};

DynamicData[Constant.SIAKUM] = {
  title: "siakum",
  subTitle: "Sistem Arsip Dinas Koperasi dan Usaha Mikro",
  logo: "/images/semarang.png",
  color: {
    mainColor: "#2E856E",
    secondColor: "#006A4E",
    thirdColor: "#FFFFFF",
  },
};

export default DynamicData;
