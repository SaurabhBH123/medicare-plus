import React, { useContext, useState } from "react";
import axios from "axios";
import "./SingleProduct.css";
import { useNavigate, useParams } from "react-router-dom";
// import { getProductsdetails } from "../../redux/ProductDetails/action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { addCart } from "../../redux/Cart/action";
import { useToast } from "@chakra-ui/react";
import Navbar1 from "../../components/Navbar/Navbar1";
import SearchBar from "../../components/Navbar/SearchBar";
import Footer from "../../components/Footer/Footer";
// import { addCart } from "../../Redux/Cart/action";

const SingleProduct = () => {
const [data, setData] = useState({})
  const dispatch = useDispatch();
  const {token} = useContext(AuthContext)
  const navigate = useNavigate()
  const toast = useToast();
  // console.log(user)
  const {id} = useParams()
  // console.log(id)
//   const addToCart=()=>{
//     setData({...data , qty:1})
//     dispatch(addProductToCart(user,data))
//   }

  const fetchSingleProduct=(id)=>{
    axios(`https://kind-jade-eagle-sari.cyclic.app/productPage?_id=${id}`)
    // .then(res=>setData(res.data[0]))
    .then(res=>setData(res.data[0]))
     .catch(err=>console.log(err))
  }
  // console.log(data)
  useEffect(() => {
  fetchSingleProduct(id)
  }, [])
  

  // console.log(data);

  // console.log(id)
//   const hendelADDToCart = (id) => {
//     // console.log(id)
//     dispatch(addCart(id))
//   };

const handleAddToCart = () => {
  // console.log(product,token)
  const newProduct=[]
  newProduct.push(data)
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

  return (
    <>
    <Navbar1/>
    <SearchBar/>
    <div id="product">
      <div className="productdel">

        <div className="producttop">
        

         <img src={data?.image_url || "https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"}  alt="products_id" />
        </div>
        <div className="productheding">
          <h1>
            {data?.product_title || "Tata 1mg Women's Multivitamin, Zinc, Vitamin C, Calcium, Vitamin D, and Iron Immunity Booster Tablet"}
          </h1>

          <div
            style={{
              margin: "10px",
              fontSize: "15px",
              lineHeight: "17px",
              color: "#ff6f61",
            }}
          >
           {data?.brand || "Tata 1mg Healthcare Solutions Private Limited"} 
          </div>
          <div
            className="rating"
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "2x",
              bagroundColor: "#1aab2a",
              fontWeight: "bold",
              fontSize: "19px",
              margin: "10px",
            }}
          >
             {data?.avg_rating || "3.5"} 
          </div>
          <p
            style={{
              marginLeft: "80px",
              fontSize: "15px",
              marginTop: "-38px",
              color: "#ff6f61",
            }}
          >
            {data?.total_ratings || "1023 Ratings & 185 Reviews"}
          </p>
          <div
            style={{
              margin: "10px",
              fontSize: "15px",
              lineHeight: "17px",
              color: "#ff6f61",
            }}
          >
            <img
              style={{ width: "30px", height: "30" }}
              src="https://onemg.gumlet.io/marketing/qubet60eokwth4ki5btj.png"
            />
            <p
              style={{
                marginTop: "-25px",
                fontSize: "15px",
                lineHeight: "17px",
                color: "#ff6f61",
                marginLeft: "40px",
              }}
            >
              {data?.shortDesc || "Tata 1mg Healthcare Solutions Private Limited"} 
            </p>
          </div>
          <div
            style={{ marginTop: "30px", fontSize: "20px", marginLeft: "10px" }}
          >
            <h3>Pack Size</h3>
            <h3>{data?.pack_size}</h3>
          </div>

          <div style={{ marginTop: "10px" }}>
            <h4>Product highlights</h4>
            <ul>
              <li>Supports bone, skin and eye health </li>
              <li>Prevents hormonal imbalance </li>
              <li>Aids in maintaining a healthy lifestyle </li>
              <li>Helps improve immunity</li>
              <li>Improves digestion and restores gut bacteria</li>
              <li>Improves energy levels and supports brain health </li>
              
            </ul>
          </div>
        </div>

        <div className="produ">
          <div className="productcard">
            <div
              className="div1"
              style={{
                width: "100%",
                height: "40px",
                alignItems: "center",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <img
                style={{ marginLeft: "10px", width: "20px", height: "20px" }}
                src="https://www.1mg.com/images/social_cue.svg"
              />
              <p
                style={{
                  fontWeight: "400px",
                  fontSize: "15px",
                  lineHeight: "17px",
                  marginLeft: "50px",
                  marginTop: "-10px",
                }}
              >
                385 people bought this recently
              </p>
            </div>
            <form>
              <div style={{ fontSize: "20px", marginLeft: "20px",display:'flex',marginTop:"20px" }}>
                <input
                  style={{ marginLeft: "15px", height: "20px", width: "20px" }}
                  name="pcheck"
                  value=  {data?.final_price || "₹500"}
                  type="radio"
                />
                {/* &nbsp;&nbsp; */}
                <label htmlFor="price" style={{ marginLeft: "15px"}}>₹ {data?.final_price || "₹500"}</label>
                <p
                  style={{
                    color: "#666666",
                    textDecoration: "line-through",
                    fontSize: "18px",
                    lineHeight: "23px",
                    marginTop: "7px",
                    marginLeft: "20px",
                  }}
                >
                  ₹ {data?.MRP || "999"}
                </p>
                <p
                  style={{
                    fontWeight: "400",
                    color: "#42ba4f",
                    fontSize: "18px",
                    marginTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  {data?.discount || "50% "} off
                </p>
              </div>

              <div style={{ fontSize: "20px", margin: "20px" }}>
                <input
                  style={{ marginLeft: "15px", height: "20px", width: "20px" }}
                  name="pcheck"
                  value="500"
                  type="radio"
                />
                &nbsp;&nbsp;
                <label htmlFor="price">₹ 700</label>
                <img
                  style={{
                    fontWeight: "500",
                    color: "#42ba4f",
                    fontSize: "16px",
                    marginTop: "-25px",
                    marginLeft: "100px",
                  }}
                  src="https://res.cloudinary.com/du8msdgbj/image/upload/v1613645053/marketing/phb2bz61etrdmuurfdoq.png"
                  alt=""
                />
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    marginTop: "-25px",
                    marginLeft: "180px",
                  }}
                >
                  member price free shipping and 5% Extra cashback
                </p>
              </div>
              <div style={{ margin: "20px", fontSize: "15px" }}>
                <label>Inclusive of all taxes</label>
                <br />
                <select>
                  <option value="1">1 Bottel</option>
                  <option value="2">2 Bottels</option>
                  <option value="3">3 Bottels</option>
                  <option value="4">4 Bottels</option>
                  <option value="5">5 Bottels</option>
                  <option value="6">6 Bottels</option>
                  <option value="7">7 Bottels</option>
                  <option value="8">8 Bottels</option>
                  <option value="9">9 Bottels</option>
                  <option value="10">10 Bottels</option>
                </select>
                &nbsp;&nbsp; of 60 bottels
              </div>
              <div className="btn">
                <button
                  className="btn1"
                  type="submit"
                  onClick={() => handleAddToCart()}
                >
                  ADD TO CART
                </button>
              </div>
            </form>
          </div>
          <div className="dates1">
            <p>
              <span>Earliest delivery by</span>{" "}
              <span className="contain"> 5pm, Tomorrow</span>{" "}
            </p>
            <p>
              Delivering to: <span> 110020, New Delhi </span>
            </p>
          </div>

          <div style={{ marginTop: "20px" }}>
            <img
              style={{ width: "500px" }}
              src="https://onemg.gumlet.io/58aeea63-bdc4-48ce-be10-0f5d31a99dfe_1667671530.jpg?w=410&h=94&format=auto"
            />
          </div>
          <div className="offer">
            <p>
              <span>Amazon Pay :</span> Pay with Amazon Pay and win up to ₹500
              cashback.
              <br />
              Valid only on minimum order value of ₹399. Valid till
              <br />
              30th November 2022.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SingleProduct;
