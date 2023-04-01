import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSingleEditProductData,
  getSingleProductData,
} from "../../redux/AdminProductReducer/action";

const AddProduct = () => {
  const { id } = useParams();
  const EditData = useSelector((store) => store.adminProductReducer.products);
  const [editTitle, setEditTitle] = useState("");
  const [editImage_url, setEditImage_url] = useState("");
  const [editPack_size, setEditPack_size] = useState("");
  const [editFinal_price, setEditFinal_price] = useState("");
  const [editMRP, setEditMRP] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editAvg_rating, setEditAvg_rating] = useState("");
  const [editTotal_ratings, setEditTotal_ratings] = useState("");
  const [editDiscount, setEditDiscount] = useState("");
  useEffect(() => {
    const productData = EditData.find((el) => el._id === id);
    (productData && setEditTitle(productData.product_title)) ||
      setEditImage_url(productData.image_url) ||
      setEditPack_size(productData.pack_size) ||
      setEditFinal_price(productData.final_price) ||
      setEditMRP(productData.MRP) ||
      setEditCategory(productData.category) ||
      setEditAvg_rating(productData.avg_rating) ||
      setEditTotal_ratings(productData.total_ratings) ||
      setEditDiscount(productData.discount);
  }, []);

  console.log("editproduct", editTitle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const newData = {
      product_title: editTitle,
      image_url: editImage_url,
      pack_size: editPack_size,
      final_price: editFinal_price,
      MRP: editMRP,
      category: editCategory,
      avg_rating: editAvg_rating,
      total_ratings: editTotal_ratings,
      discount: editDiscount,
    };
    console.log("newData", newData);
    dispatch(getSingleEditProductData(id, newData));
    navigate("/product-list");
  };

  return (
    <>
      <div class="row mt-3">
        <div class="col-12 col-xl-12">
          <div class="card card-body border-0 shadow mb-4">
            <h2 class="h5 mb-4">Edit Product Details</h2>
            <form
              onSubmit={(e) => {
                handleEditSubmit(e);
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
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
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
                      value={editPack_size}
                      onChange={(e) => setEditPack_size(e.target.value)}
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
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
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
                      value={editImage_url}
                      onChange={(e) => setEditImage_url(e.target.value)}
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
                      value={editFinal_price}
                      onChange={(e) => setEditFinal_price(e.target.value)}
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
                      value={editMRP}
                      onChange={(e) => setEditMRP(e.target.value)}
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
                      value={editDiscount}
                      onChange={(e) => setEditDiscount(e.target.value)}
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
                      value={editAvg_rating}
                      onChange={(e) => setEditAvg_rating(e.target.value)}
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
                      value={editTotal_ratings}
                      onChange={(e) => setEditTotal_ratings(e.target.value)}
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
