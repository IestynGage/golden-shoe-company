import { HomeOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import "./NavigationBar.css";

export default function NavigationBar() {

  return (
    <div className="navigationBar">
      <HomeOutlined style={{ fontSize: "45px" }}/>
      <SearchOutlined style={{ fontSize: "45px" }}/>
      <ShoppingCartOutlined style={{ fontSize: "45px" }}/>
      <UserOutlined style={{ fontSize: "45px" }}/>
    </div>
  )
}