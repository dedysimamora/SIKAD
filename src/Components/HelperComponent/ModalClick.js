import React, { useState } from "react";
import { Icon, Spin, Modal, Button } from "antd";

import "./modalClick.css";

const ModalClick = (props) => {
  const {
    title,
    image,
    errorMessage,
    description,
    mainButton,
    visible,
    secondaryButton,
    mainColor,
    secondColor,
  } = props;
  const renderImage = (image) => {
    switch (image) {
      case "success":
        return (
          <Icon
            type="check-circle"
            style={{ fontSize: "150px", color: `${mainColor}` }}
          />
        );
      case "failed":
        return (
          <Icon
            type="close-circle"
            style={{ fontSize: "150px", color: `${mainColor}` }}
          />
        );
      case "question":
        return (
          <Icon
            type="question-circle"
            style={{ fontSize: "150px", color: `${mainColor}` }}
          />
        );

      default:
        break;
    }
  };

  return (
    <Modal
      id={"modal-ModalClick"}
      zIndex={9999}
      closable={false}
      centered
      width={500}
      visible={visible}
      footer={null}
      bodyStyle={{
        borderRadius: "8px",
        borderTop: `2px solid ${mainColor}`,
        backgroundColor: "#ffffff",
      }}
    >
      <div className={"click-modal-container"}>
        {renderImage(image)}
        <h4
          id={`title-modalClick-`}
          className={"click-modal-title"}
          style={{ color: `${mainColor}` }}
        >
          {title}
        </h4>
        <Button
          id={`mainBtn-modalClick`}
          style={{
            marginTop: errorMessage || description !== null ? 0 : 80,
            textTransform: "initial",
            fontWeight: "600",
            backgroundColor: secondaryButton ? "#FF0000" : `${mainColor}`,
            color: `${secondColor}`,
            height: "45px",
          }}
          onClick={mainButton.onClick}
        >
          {mainButton.title}
        </Button>
        {secondaryButton !== undefined ? (
          <Button
            id={`scndBtn-modalClick`}
            style={{
              marginTop: errorMessage || description !== null ? 10 : 80,
              textTransform: "initial",
              fontWeight: "600",
              backgroundColor: `${mainColor}`,
              color: `${secondColor}`,
              height: "45px",
            }}
            onClick={secondaryButton.onClick}
          >
            {secondaryButton.title}
          </Button>
        ) : null}
      </div>
    </Modal>
  );
};

export default ModalClick;
