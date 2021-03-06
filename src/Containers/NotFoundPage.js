import React from "react";
import { Result, Button } from "antd";
const NotFoundPage = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Halaman yang anda cari tidak ada"
    />
  );
};

export default NotFoundPage;
