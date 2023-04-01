import "./Cart.css";

export const Item = ({
  product_title,
  pack_size,
  final_price,
  MRP,
  id,
  handleChange,
  handleDelete,
  discount,
}) => {
  return (
    <div className="Item-conatiner">
      <div className="left-item-container">
        <h6>{product_title}</h6>
        <p>{pack_size}</p>
        <div className="remove-div" onClick={() => handleDelete(id)}>
          <img src="https://img.1mg.com/images/delete_icon.svg" alt="remove" />{" "}
          <p>Remove</p>
        </div>
      </div>
      <div className="right-item-container">
        <h6>₹ {final_price}</h6>
        <p>MRP ₹{MRP}</p>
        <div className="quantity-div">
          <div 
          // disabled={quantity === 1} 
          onClick={() => handleChange(id, -1)}>
            <img
              src="https://www.1mg.com/images/minus-cart.svg"
              alt="minus"
              width={"70px"}
            />
          </div>
          <div>
            {/* <p>{quantity}</p> */}
          </div>
          <div onClick={() => handleChange(id, 1)}>
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
