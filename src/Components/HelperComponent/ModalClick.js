import React, { useState } from "react";
import { Icon, Spin, Modal, Button } from "antd";
import Success from "../../Assets/Images/success.svg"
import Failed from "../../Assets/Images/failed.svg"
import Question from "../../Assets/Images/question.svg"


import "./modalClick.css"


const imageListDialog = {
    success: Success,
    failed : Failed,
    question : Question
};

const ModalClick = props => {
    const { title, image, errorMessage, description, mainButton, visible, secondaryButton } = props;
    
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
                borderTop: "2px solid #780000",
                backgroundColor: "#ffffff"
            }}
        >
            <div className={"click-modal-container"}>
                    <img
                        id={"img-modalClick"}
                        className={"click-modal-image"}
                        height={180}
                        src={imageListDialog[image]}
                        alt={"modal-error"}
                    />
                    <h4 id={`title-modalClick-`} className={"click-modal-title"}>
                        {title}
                    </h4>
                    <Button
                        id={`mainBtn-modalClick`}
                        style={{
                            marginTop: errorMessage || description !== null ? 0 : 80,
                            textTransform: "initial",
                            fontWeight: "600",
                            backgroundColor: secondaryButton ? "#FF0000" : "#001529",
                            color: "white",
                            height : "45px"
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
                            color: "#780000",
                            textTransform: "initial",
                            fontWeight: "600",
                            backgroundColor:"#001529",
                            color: "white",
                            height : "45px"
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
