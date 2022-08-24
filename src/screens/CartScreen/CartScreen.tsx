import NavigationBar from "../../components/NavigationBar/NavigationBar";
import OrderItem from "../../components/OrderItem/OrderItem";
import "./CartScreen.css";

export default function CartScreen() {
  return (
    <>
      <div className="content">
        <h1> Arriving soon</h1>
        <div className="list">
          <OrderItem
            title="New fancy shoes"
            dateType="Expected"
            date="23/08/2022"
          />
          <OrderItem
            title="New black formal shoes"
            dateType="Expected"
            date="23/08/2022"
          />
        </div>
        <h1> Delivered</h1>
        <div className="list">
          <OrderItem title="Fancy boots" dateType="Arrived" date="23/08/2022" />
          <OrderItem
            title="Formal shoes"
            dateType="Arrived"
            date="23/08/2022"
          />
          <OrderItem title="Trainers" dateType="Arrived" date="22/08/2022" />
          <OrderItem
            title="Blue running shoes"
            dateType="Arrived"
            date="22/08/2022"
          />
          <OrderItem
            title="Red running shoes"
            dateType="Arrived"
            date="21/08/2022"
          />
        </div>
      </div>
      <NavigationBar />
    </>
  );
}
