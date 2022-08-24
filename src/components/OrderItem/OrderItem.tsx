import { Card } from "antd";
import { useNavigate } from "react-router-dom";

interface OrderItemProps {
  title?: string;
  dateType?: "Arrived" | "Expected";
  date?: string;
}

export default function OrderItem({ title, date, dateType }: OrderItemProps) {
  let navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate("/orders/fancy-boots");
      }}
      style={{
        width: "95%",
        cursor: "pointer",
      }}
    >
      <h3> {title} </h3>
      <span>
        {dateType}: {date}
      </span>
    </Card>
  );
}
