import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/AdminProductReducer/action";
let initialState = {
  image_url: "",
  pack_size: "",
  final_price: 0,
  MRP: "",
  category: "",
  avg_rating: "",
  total_ratings: "",
  discount: "",
  product_title: "",
};

const AddProduct = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return {
        ...prev,
        [name]:
          name === "final_price" || name === "MRP" || name === "avg_rating"
            ? +value
            : value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    console.log(initialState);
    setProduct(initialState);
    navigate("/product-list");
  };
  return (
    <>
      <div class="row mt-3">
        <div class="col-12 col-xl-12">
          <div class="card card-body border-0 shadow mb-4">
            <h2 class="h5 mb-4">Add Product Details</h2>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div>
                    <label for="first_name">Product Title</label>{" "}
                    <input
                      class="form-control"
                      id="product_title"
                      type="text"
                      name="product_title"
                      placeholder="product_title"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div>
                    <label for="last_name">Product Size</label>{" "}
                    <input
                      class="form-control"
                      id="pack_size"
                      type="text"
                      name="pack_size"
                      placeholder="pack_size"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-md-6 mb-3">
                  <div>
                    <label for="last_name">Product Category</label>{" "}
                    <select
                      class="form-control"
                      id="product_Category"
                      type="text"
                      name="category"
                      placeholder="product_Category"
                      onChange={(e) => handleChange(e)}
                      required
                    >
                      <option value="adult">Adult</option>
                      <option value="Child">Child</option>
                      <option value="elderly">Elderly</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-6 mb-3">
                  <div class="form-group">
                    <label for="zip">Product Image</label>{" "}
                    <input
                      class="form-control"
                      id="image_url"
                      type="text"
                      name="image_url"
                      placeholder="Product Image URL"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div>
                    <label for="last_name">Product Price</label>{" "}
                    <input
                      class="form-control"
                      id="final_price"
                      type="number"
                      name="final_price"
                      placeholder="final_price"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div>
                    <label for="last_name">Product MRP</label>{" "}
                    <input
                      class="form-control"
                      id="MRP"
                      type="text"
                      name="MRP"
                      placeholder="product MRP"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6 mb-3">
                  <div class="form-group">
                    <label for="address">Discount</label>{" "}
                    <input
                      class="form-control"
                      id="discount"
                      type="text"
                      name="discount"
                      placeholder="Discount"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>

                <div class="col-sm-6 mb-3">
                  <div class="form-group">
                    <label for="city">Avarage Rating</label>{" "}
                    <input
                      class="form-control"
                      id="avg_rating"
                      type="text"
                      name="avg_rating"
                      placeholder="avg_rating"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 mb-3">
                  <div class="form-group">
                    <label for="city">Total Rating</label>{" "}
                    <input
                      class="form-control"
                      id="total_ratings"
                      type="text"
                      name="total_ratings"
                      placeholder="total_ratings"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="mt-3 text-end">
                <button class="btn btn-warning mt-2 animate-up-2" type="submit">
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
