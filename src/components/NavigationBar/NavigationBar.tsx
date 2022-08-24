import {
  HomeOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {
  let navigate = useNavigate();

  return (
    <div className="navigationBar">
      <Button
        className="navigation-btn"
        icon={<HomeOutlined />}
        onClick={() => {
          navigate("/");
        }}
      />
      <Button
        className="navigation-btn"
        icon={<SearchOutlined />}
        onClick={() => {
          navigate("/");
        }}
      />
      <Button
        className="navigation-btn"
        icon={<ShoppingCartOutlined />}
        onClick={() => {
          navigate("/");
        }}
      />
      <Button
        className="navigation-btn"
        icon={<UnorderedListOutlined />}
        onClick={() => {
          navigate("/orders");
        }}
      />
      <Button
        className="navigation-btn"
        icon={<UserOutlined />}
        onClick={() => {
          navigate("/profile");
        }}
      />
    </div>
  );
}
