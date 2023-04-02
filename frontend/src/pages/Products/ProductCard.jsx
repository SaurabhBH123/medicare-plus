import { Flex, useToast } from "@chakra-ui/react";
import React, { useContext } from "react";
import "./Product.css";
// import { ImStarEmpty } from "react-icons/im";
// import { FaCartPlus } from "react-icons/fa";
// import { addCart } from "../../Redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";
import { getProductsdetails } from "../../redux/ProductDetails/action";
import { useNavigate } from "react-router-dom";
import { addCart } from "../../redux/Cart/action";
import { AuthContext } from "../../Context/AuthContext";
import {FiStar} from "react-icons/fi"

export const ProductCard = ({ product }) => {
  // console.log(product)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token} = useContext(AuthContext)
  const toast = useToast()
  // console.log(token)
  const handleAddToCart = (product) => {
    console.log(product,token)
    const newProduct=[]
    newProduct.push(product)
    dispatch(addCart(newProduct,token));
    toast({
      title: 'Product Added To Cart.',
      // description: "We've created your account for you.",
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
    navigate("/cart")
  };

  const handleDetails = (id) => {
    dispatch(getProductsdetails(id));
    navigate(`/products/${id}`);
  };

  return (
    <div className="productCart_container">
      <div className="product_image"
       onClick={() => handleDetails(product._id)}
       >
        <img src={product.image_url} alt="product"/>
      </div>

      <div className="product_details">
        <div
          className="product_header"
          style={{
            height: "50px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <h3 style={{ color: "#213253", fontSize: "14px" }}>
            {product.product_title}
          </h3>
        </div>
        <div
          className="product_quantity"
          style={{ width: "100%", padding: "0 0 5px 0" }}
        >
          <p style={{ color: "#757575", fontSize: "12px" }}>
            {product.pack_size}
          </p>
        </div>
        <div className="product_rating">
          <Flex gap={2}>
            <div
              style={{
                background: "#1AAB2A",
                padding: "2px 7px",
                borderRadius: "2px",
                height:'25px'
              }}
            >
              <Flex gap={1} ptb={1} style={{ fontWeight: "800" }}>
                <p style={{ color: "#FFFFFF", fontSize: "12px" }}>
                  {product.avg_rating===null?4.2:product.avg_rating}
                </p>
                <div style={{ color: "#FFFFFF", fontSize: "12px",paddingTop:'3px' }}>
                <FiStar/>
                </div>
              </Flex>
            </div>
            <p style={{ color: "#00000094", fontSize: "12px" }}>
              {product.total_ratings===""?Math.ceil(Math.random()*1000)+" ratings":product.total_ratings}
            </p>
          </Flex>

          <Flex
            gap={2}
            style={{
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            <div style={{ color: "#858585 " }}>
              MRP{"  "}
              <span style={{ textDecoration: "line-through" }}>
                ₹{product.MRP}
              </span>
            </div>
            <div style={{ color: "#1AAB2A" }}>{product.discount}</div>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            style={{
              // border: "1px solid red",
              width: "100%",
              fontWeight: "600",
            }}
          >
            <h2>₹{product.final_price}</h2>
            <Flex
              gap={1}
              alignItems="center"
              className="add_btn"
              onClick={() => handleAddToCart(product)}
            >
              {/* <FaCartPlus /> */}
              ADD
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};