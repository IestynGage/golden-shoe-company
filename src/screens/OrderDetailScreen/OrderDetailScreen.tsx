import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "../../App.css";
import "./OrderDetailScreen.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Modal, Radio, Space } from "antd";
import { useState } from "react";

export default function OrderDetailScreen() {
  let navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    navigate("/orders");
  };

  return (
    <>
      <div className="content">
        <h1
          onClick={() => navigate("/orders")}
          style={{
            textAlign: "start",
            paddingLeft: "8px",
            cursor: "pointer",
          }}
        >
          <ArrowLeftOutlined />
          Formal Boots
        </h1>
        <div className="makeshift-image">
          <span> Example Image</span>
        </div>
        <br></br>
        <span>Arrived: 23/08/2022</span>
        <div className="button-bar">
          <Button onClick={showModal}> Exchange </Button>
          <Button> Refund </Button>
        </div>
      </div>
      <NavigationBar />
      <Modal title="Exchange shoe" visible={isModalVisible} onOk={handleOk}>
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={1}> Exchange for a size</Radio>
            <Radio value={2}> Exchange for a different colour</Radio>
          </Space>
        </Radio.Group>
      </Modal>
    </>
  );
}
