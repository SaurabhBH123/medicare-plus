import React, { useContext } from "react";
import "./Cart.css";
import { Item } from "./Item";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCart, getCarts, updateCart } from "../../redux/Cart/action";
import { AuthContext } from "../../Context/AuthContext";


export const Cart = () => {
  const data = useSelector((state) => state.CartReducer.carts);
  const {token} = useContext(AuthContext)
  console.log(data)
  console.log(token)
  // const data = [
  //   {
  //     "id": 1,
  //     "category": "adult",
  //     "image_url": "https://onemg.gumlet.io/images/h_150,w_150,f_auto,q_auto,c_fit/d3008f6cfdd34ceabbf8e478918c640d/alzyme-syrup-pineapple.jpg",
  //     "product_title": "Alzyme + Syrup Pineapple",
  //     "pack_size": "bottle of 200ml Syrup",
  //     "avg_rating": "",
  //     "total_ratings": "",
  //     "MRP": 135,
  //     "discount": 40,
  //     "final_price": 81
  //   },
  //   {
  //     "image_url": "https://onemg.gumlet.io/images/h_150,w_150,f_auto,q_auto,c_fit/612582d3c8ee43c2978b15f6679129b1/megagrow-bcaa-advance-supplement-powder-green-apple.jpg",
  //     "pack_size": "test",
  //     "final_price": 200,
  //     "MRP": 300,
  //     "category": "child",
  //     "avg_rating": 3,
  //     "total_ratings": "5",
  //     "discount": "100",
  //     "product_title": "test",
  //     "id": 2
  //   }
  // ]
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarts(token));
  }, []);

  const totalPrice =
    data?.reduce(
      (acc, item) => acc + Number(item.MRP),
      0
    ) || 0;

  const discountPrice =
    data?.reduce(
      (acc, item) =>
        acc +
        Number([(item.discount / 100) * item.MRP]),
      0
    ) || 0;

  const handleChange = (id, change) => {
    let temp = data.filter((item) => (item._id === id ? item : null));
    let temp2 = temp[0].quantity + change;
    const payload = {
      quantity: temp2,
    };

    if (temp2 >= 1) {
      dispatch(updateCart(id, payload)).then((res) => {
        dispatch(getCarts());
      });
    }
  };

  const handleDelete = (id,token) => {
    dispatch(deleteCart(id,token))
    // .then((res) => {
    //   dispatch(getCarts());
    // }
      // );
  };

  return (
    <div className={"container"}>
      <div className="left-container">
        {/* <p>Items NOT Requiring Prescription</p> */}
        <div>
          {data !== undefined
            ? data?.map((item) => {
                return (
                  <Item
                    key={item._id}
                    {...item}
                    handleChange={handleChange}
                    handleDelete={handleDelete}
                  />
                );
              })
            : null}
        </div>
        {/* <p>Deals from Dettol</p> */}
      </div>
      <div className="right-container">
        <div className="coupon-div">
          <img
            src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png"
            alt="care-logo"
            width="90px"
          />
          <p>You can save extra ₹27 on this order</p>
          <p>Become a member</p>
          <p>
            Care plan membership ₹ 165{" "}
            <span style={{ textDecoration: "line-through" }}>₹ 549</span> / 3
            months
          </p>
          <div className="coupon-button">
            <button>Know More</button>
            <button>Add to cart</button>
          </div>
          <hr />
          <div className="apply-coupon">
            <h4>Apply Coupon</h4>
          </div>
        </div>
        <div className="health-div">
          <div className="health-div1">
            <p>Check the health of your vital organs</p>
          </div>
          <div className="health-child">
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <p>Book Good Health Silver Package for just ₹649</p>
              <p>
                Get the tests done easily from your home. This package will help
                you in identifying potential disorders and deficiencies at an
                early stage.
              </p>
              <p>Pay later on home sample collection</p>
            </div>
          </div>
        </div>
        <div className="neocoins">
          <div className="neocoin-div1">
            <div className="left-neocoin-div1">
              <img
                src="https://res.cloudinary.com/du8msdgbj/image/upload/v1645088829/210921_TataNeu_appicon_light_24px_circle_3_1x_vxwibw.png"
                alt="neocoin"
                width="30px"
              />
              <p>My NeuCoins</p>
            </div>
            <div className="right-neocoin-div1">
              <p>
                Balance: <b>0 NeuCoin</b>
              </p>
            </div>
          </div>
          <hr />
          <div className="neocoin-div2">
            <h6>
              <b> 5.49 </b>NeuCoins to be earned on this order*
            </h6>
            <div className="neocoin-div2-div1">
              <img
                src="https://onemg.gumlet.io/image/upload/v1632494429/jyjhkjmghzvoxovlqmli.png"
                alt="icon"
                width="20px"
                background-color="#FFE0CC"
              />
              <p>Extra 27.45 NeuCoins for care Plan members cp</p>
              <img
                src="https://onemg.gumlet.io/image/upload/v1632494457/sleif8m2hf1wj1jp0ylp.png"
                alt="icon"
                width="20px"
              />
            </div>
            <h4>Add care plan to cart</h4>
          </div>
        </div>
        <div className="payment-div">
          <div className="pay-div">
            <p>Item Total(MRP)</p>
            <p>₹ {totalPrice}</p>
          </div>
          <div className="pay-div">
            <p>Price Discount</p>
            <p>-₹ {discountPrice}</p>
          </div>
          <hr />
          <div className="pay-div">
            <p>Shipping Fee</p>
            <p>₹0</p>
          </div>
          <hr />
          <div className="pay-div fs-14">
            <p>To be paid</p>
            <p>₹ {totalPrice - discountPrice}</p>
          </div>
          <hr />
          <div className="pay-div bg-grey fs-14 col-grn">
            <p>Total Savings</p>
            <p>₹ {discountPrice}</p>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-div">
            <p>Your delivery location</p>
            {/* <h6>Latur</h6> */}
          </div>
          <Link to={"/address-page"}>
            <button>CHECKOUT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
