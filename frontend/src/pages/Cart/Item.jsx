import { useContext, useState } from "react";
import "./Cart.css";
import { AuthContext } from "../../Context/AuthContext";

export const Item = ({
  _id,
  product_title,
  pack_size,
  final_price,
  MRP,
  id,
  handleChange,
  handleDelete,
  discount,
}) => {
  const {token} = useContext(AuthContext)
  const [quantity,setQuantity] = useState(1)

  return (
    <div className="Item-conatiner">
      <div className="left-item-container">
        <h6>{product_title}</h6>
        <p>{pack_size}</p>
        <div className="remove-div" onClick={() => handleDelete(_id,token)}>
          <img src="https://img.1mg.com/images/delete_icon.svg" alt="remove" />
          <p style={{marginTop:"15px"}}>Remove</p>
        </div>
      </div>
      <div className="right-item-container">
        <h6>₹ {final_price}</h6>
        <p>MRP ₹{MRP}</p>
        <div className="quantity-div">
          <div 
          disabled={quantity === 1} 
          onClick={() => handleChange(id, -1)}>
            <img
              src="https://www.1mg.com/images/minus-cart.svg"
              alt="minus"
              width={"70px"}
            />
          </div>
          <div>
            <p style={{marginTop:'10px'}}>{quantity}</p>
          </div>
          <div
          disabled={quantity === 10}
          onClick={() => handleChange(id, 1)}>
            <img
              src="https://www.1mg.com/images/plus-cart.svg"
              alt="plus"
              width={"70px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
