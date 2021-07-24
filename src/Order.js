import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
//import NumberFormat from "react-number-format";
import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      {/* <NumberFormat */}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order total {value}</h3>
        )}
        decimalScale={2}
        displayType={"text"}
        value={order.data.amount / 100}
        thousandSeparator={true}
        // thousandsGroupStyle="lakh"
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;