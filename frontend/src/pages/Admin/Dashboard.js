import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// };
function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  function getUserCount() {
    axios
      .get(`https://kind-jade-eagle-sari.cyclic.app/auth`)
      .then((response) => {
        setUserCount(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getProductCount() {
    axios
      .get(`https://kind-jade-eagle-sari.cyclic.app/productPage`)
      .then((response) => {
        setProductCount(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getOrderCount() {
    axios
      .get(`https://kind-jade-eagle-sari.cyclic.app/orders`)
      .then((response) => {
        setOrderCount(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getUserCount();
    getProductCount();
    getOrderCount();
  }, []);
  return (
    <div className="dashboard-container">
      <nav class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
        <div class="container-fluid px-0">
          <div
            class="d-flex justify-content-between w-100"
            id="navbarSupportedContent"
          >
            <div class="d-flex align-items-center">
              <form class="navbar-search form-inline" id="navbar-search-main">
                <div class="input-group input-group-merge search-bar">
                  <span class="input-group-text" id="topbar-addon">
                    <svg
                      class="icon icon-xs"
                      x-description="Heroicon name: solid/search"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="topbarInputIconLeft"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="topbar-addon"
                  />
                </div>
              </form>
            </div>
            <ul class="navbar-nav align-items-center">
              <li class="nav-item dropdown">
                <a
                  class="nav-link text-dark notification-bell unread dropdown-toggle"
                  data-unread-notifications="true"
                  href="."
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  <svg
                    class="icon icon-sm text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                  </svg>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                  <div class="list-group list-group-flush">
                    <a
                      href="."
                      class="text-center text-primary fw-bold border-bottom border-light py-3"
                    >
                      Notifications
                    </a>
                    <a
                      href="."
                      class="list-group-item list-group-item-action border-bottom"
                    >
                      <div class="row align-items-center">
                        <div class="col-auto">
                          {" "}
                          <img
                            alt=""
                            src="assets/img/profile-picture-1.jpg"
                            class="avatar-md rounded"
                          />
                        </div>
                        <div class="col ps-0 ms-2">
                          <div class="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 class="h6 mb-0 text-small">Jose Leos</h4>
                            </div>
                            <div class="text-end">
                              <small class="text-danger">
                                a few moments ago
                              </small>
                            </div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            Added you to an event "Project stand-up" tomorrow at
                            12:30 AM.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="."
                      class="list-group-item list-group-item-action border-bottom"
                    >
                      <div class="row align-items-center">
                        <div class="col-auto">
                          {" "}
                          <img
                            alt=""
                            src="assets/img/profile-picture-2.jpg"
                            class="avatar-md rounded"
                          />
                        </div>
                        <div class="col ps-0 ms-2">
                          <div class="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 class="h6 mb-0 text-small">Neil Sims</h4>
                            </div>
                            <div class="text-end">
                              <small class="text-danger">2 hrs ago</small>
                            </div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            You've been assigned a task for "Awesome new
                            project".
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="."
                      class="list-group-item list-group-item-action border-bottom"
                    >
                      <div class="row align-items-center">
                        <div class="col-auto">
                          {" "}
                          <img
                            alt=""
                            src="assets/img/profile-picture-3.jpg"
                            class="avatar-md rounded"
                          />
                        </div>
                        <div class="col ps-0 m-2">
                          <div class="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 class="h6 mb-0 text-small">Roberta Casas</h4>
                            </div>
                            <div class="text-end">
                              <small>5 hrs ago</small>
                            </div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            Tagged you in a document called "Financial plans",
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="."
                      class="list-group-item list-group-item-action border-bottom"
                    >
                      <div class="row align-items-center">
                        <div class="col-auto">
                          {" "}
                          <img
                            alt=""
                            src="assets/img/profile-picture-4.jpg"
                            class="avatar-md rounded"
                          />
                        </div>
                        <div class="col ps-0 ms-2">
                          <div class="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 class="h6 mb-0 text-small">Joseph Garth</h4>
                            </div>
                            <div class="text-end">
                              <small>1 d ago</small>
                            </div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            New message: "Hey, what's up? All set for the
                            presentation?"
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="."
                      class="list-group-item list-group-item-action border-bottom"
                    >
                      <div class="row align-items-center">
                        <div class="col-auto">
                          {" "}
                          <img
                            alt=""
                            src="assets/img/profile-picture-5.jpg"
                            class="avatar-md rounded"
                          />
                        </div>
                        <div class="col ps-0 ms-2">
                          <div class="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 class="h6 mb-0 text-small">Rohit Kumar</h4>
                            </div>
                            <div class="text-end">
                              <small>2 hrs ago</small>
                            </div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            New message: "We need to improve the UI/UX for the
                            landing page."
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="."
                      class="dropdown-item text-center fw-bold rounded-bottom py-3"
                    >
                      <svg
                        class="icon icon-xxs text-gray-400 me-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      View all
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown ms-lg-3">
                <a
                  class="nav-link dropdown-toggle pt-1 px-0"
                  href="."
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div class="media d-flex align-items-center">
                    <img
                      class="avatar rounded-circle"
                      alt=""
                      src="assets/img/profile-picture-3.jpg"
                    />
                    <div class="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                      <span class="mb-0 font-small fw-bold text-gray-900">
                        Rohit Kumar
                      </span>
                    </div>
                  </div>
                </a>
                <div class="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
                  <a class="dropdown-item d-flex align-items-center" href=".">
                    <svg
                      class="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    My Profile
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href=".">
                    <svg
                      class="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Settings
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href=".">
                    <svg
                      class="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Messages
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href=".">
                    <svg
                      class="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Support
                  </a>
                  <div role="separator" class="dropdown-divider my-1"></div>
                  <a class="dropdown-item d-flex align-items-center" href=".">
                    <svg
                      class="dropdown-icon text-danger me-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="row">
        <div class="col-12 col-sm-6 col-xl-4 mb-4">
          <div class="card border-0 shadow">
            <Link to={"/user-list"}>
              <div class="card-body">
                <div class="row d-block d-xl-flex align-items-center">
                  <div class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                    <div class="icon-shape icon-shape-primary rounded me-4 me-sm-0">
                      <svg
                        class="icon icon-md"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                    </div>
                    <div class="d-sm-none">
                      <h2 class="h5">Customers</h2>
                      <h3 class="fw-extrabold mb-1">{userCount.length}</h3>
                    </div>
                  </div>
                  <div class="col-12 col-xl-7 px-xl-0">
                    <div class="d-none d-sm-block">
                      <h2 class="h5">Customers</h2>
                      <h3 class="fw-extrabold mb-1">{userCount.length}</h3>
                    </div>
                    <small class="d-flex align-items-center">
                      Feb 1 - Apr 1,
                      <svg
                        class="icon icon-xxs text-gray-500 ms-2 me-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      SUA
                    </small>
                    <div class="small d-flex mt-1">
                      <svg
                        class="icon icon-xs text-success"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>
                        <span class="text-success fw-bolder me-1">22%</span>{" "}
                        Since last month
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-4 mb-4">
          <div class="card border-0 shadow">
            <Link to={"/product-list"}>
              <div class="card-body">
                <div class="row d-block d-xl-flex align-items-center">
                  <div class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                    <div class="icon-shape icon-shape-secondary rounded me-4 me-sm-0">
                      <svg
                        class="icon icon-md"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div class="d-sm-none">
                      <h2 class="fw-extrabold h5">Total Products</h2>
                      <h3 class="mb-1">{productCount.length}</h3>
                    </div>
                  </div>
                  <div class="col-12 col-xl-7 px-xl-0">
                    <div class="d-none d-sm-block">
                      <h2 class="h5">Total Products</h2>
                      <h3 class="fw-extrabold mb-1">{productCount.length}</h3>
                    </div>
                    <small class="d-flex align-items-center">
                      Feb 1 - Apr 1,
                      <svg
                        class="icon icon-xxs text-gray-500 ms-2 me-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      SUA
                    </small>
                    <div class="small d-flex mt-1">
                      <svg
                        class="icon icon-xs text-danger"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>
                        <span class="text-danger fw-bolder me-1">2%</span> Since
                        last month
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-4 mb-4">
          <div class="card border-0 shadow">
            <Link to={"/order-list"}>
              <div class="card-body">
                <div class="row d-block d-xl-flex align-items-center">
                  <div class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                    <div class="icon-shape icon-shape-tertiary rounded me-4 me-sm-0">
                      <svg
                        class="icon icon-md"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div class="d-sm-none">
                      <h2 class="fw-extrabold h5">Total Orders</h2>
                      <h3 class="mb-1">{orderCount.length}</h3>
                    </div>
                  </div>
                  <div class="col-12 col-xl-7 px-xl-0">
                    <div class="d-none d-sm-block">
                      <h2 class="h5">Total Orders</h2>
                      <h3 class="fw-extrabold mb-1">{orderCount.length}</h3>
                    </div>
                    <small>Feb 1 - Apr 1</small>
                    <div class="small d-flex mt-1">
                      <svg
                        class="icon icon-xs text-success"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>
                        <span class="text-success fw-bolder me-1">4%</span>{" "}
                        Since last month
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-xl-12">
          <div class="row">
            <div class="col-12 col-xxl-6 mb-4">
              <div class="card border-0 shadow">
                <div class="card-header border-bottom d-flex align-items-center justify-content-between">
                  <h2 class="fs-5 fw-bold mb-0">Team members</h2>
                  <a href="." class="btn btn-sm btn-primary">
                    See all
                  </a>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush list my--3">
                    <li class="list-group-item px-0">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          {" "}
                          <a href="." class="avatar">
                            <img
                              class="rounded"
                              alt=""
                              src="assets/img/profile-picture-1.jpg"
                            />
                          </a>
                        </div>
                        <div class="col-auto ms--2">
                          <h4 class="h6 mb-0">
                            <a href=".">Chris Wood</a>
                          </h4>
                          <div class="d-flex align-items-center">
                            <div class="bg-success dot rounded-circle me-1"></div>
                            <small>Online</small>
                          </div>
                        </div>
                        <div class="col text-end">
                          <a
                            href="."
                            class="btn btn-sm btn-secondary d-inline-flex align-items-center"
                          >
                            <svg
                              class="icon icon-xxs me-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            Invite
                          </a>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item px-0">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          {" "}
                          <a href="." class="avatar">
                            <img
                              class="rounded-circle"
                              alt=""
                              src="assets/img/profile-picture-2.jpg"
                            />
                          </a>
                        </div>
                        <div class="col-auto ms--2">
                          <h4 class="h6 mb-0">
                            <a href=".">Jose Leos</a>
                          </h4>
                          <div class="d-flex align-items-center">
                            <div class="bg-warning dot rounded-circle me-1"></div>
                            <small>In a meeting</small>
                          </div>
                        </div>
                        <div class="col text-end">
                          <a
                            href="."
                            class="btn btn-sm btn-secondary d-inline-flex align-items-center"
                          >
                            <svg
                              class="icon icon-xxs me-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            Message
                          </a>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item px-0">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          {" "}
                          <a href="." class="avatar">
                            <img
                              class="rounded-circle"
                              alt=""
                              src="assets/img/profile-picture-3.jpg"
                            />
                          </a>
                        </div>
                        <div class="col-auto ms--2">
                          <h4 class="h6 mb-0">
                            <a href=".">Rohit Kumar</a>
                          </h4>
                          <div class="d-flex align-items-center">
                            <div class="bg-danger dot rounded-circle me-1"></div>
                            <small>Offline</small>
                          </div>
                        </div>
                        <div class="col text-end">
                          <a
                            href="."
                            class="btn btn-sm btn-secondary d-inline-flex align-items-center"
                          >
                            <svg
                              class="icon icon-xxs me-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            Message
                          </a>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item px-0">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          {" "}
                          <a href="." class="avatar">
                            <img
                              class="rounded-circle"
                              alt=""
                              src="assets/img/profile-picture-4.jpg"
                            />
                          </a>
                        </div>
                        <div class="col-auto ms--2">
                          <h4 class="h6 mb-0">
                            <a href=".">Neil Sims</a>
                          </h4>
                          <div class="d-flex align-items-center">
                            <div class="bg-danger dot rounded-circle me-1"></div>
                            <small>Offline</small>
                          </div>
                        </div>
                        <div class="col text-end">
                          <a
                            href="."
                            class="btn btn-sm btn-secondary d-inline-flex align-items-center"
                          >
                            <svg
                              class="icon icon-xxs me-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            Message
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-xxl-6 mb-4">
              <div class="card border-0 shadow">
                <div class="card-header border-bottom d-flex align-items-center justify-content-between">
                  <h2 class="fs-5 fw-bold mb-0">Progress track</h2>
                  <a href="." class="btn btn-sm btn-primary">
                    See tasks
                  </a>
                </div>
                <div class="card-body">
                  <div class="row mb-4">
                    <div class="col-auto">
                      <svg
                        class="icon icon-sm text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div class="col">
                      <div class="progress-wrapper">
                        <div class="progress-info">
                          <div class="h6 mb-0">Rocket - SaaS Template</div>
                          <div class="small fw-bold text-gray-500">
                            <span>75 %</span>
                          </div>
                        </div>
                        <div class="progress mb-0">
                          <div
                            class="progress-bar bg-success"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center mb-4">
                    <div class="col-auto">
                      <svg
                        class="icon icon-sm text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div class="col">
                      <div class="progress-wrapper">
                        <div class="progress-info">
                          <div class="h6 mb-0">YouKart - Design System</div>
                          <div class="small fw-bold text-gray-500">
                            <span>60 %</span>
                          </div>
                        </div>
                        <div class="progress mb-0">
                          <div
                            class="progress-bar bg-success"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center mb-4">
                    <div class="col-auto">
                      <svg
                        class="icon icon-sm text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div class="col">
                      <div class="progress-wrapper">
                        <div class="progress-info">
                          <div class="h6 mb-0">Homepage Design in Figma</div>
                          <div class="small fw-bold text-gray-500">
                            <span>45 %</span>
                          </div>
                        </div>
                        <div class="progress mb-0">
                          <div
                            class="progress-bar bg-warning"
                            role="progressbar"
                            aria-valuenow="45"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center mb-3">
                    <div class="col-auto">
                      <svg
                        class="icon icon-sm text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div class="col">
                      <div class="progress-wrapper">
                        <div class="progress-info">
                          <div class="h6 mb-0">Backend for therichpost v2</div>
                          <div class="small fw-bold text-gray-500">
                            <span>34 %</span>
                          </div>
                        </div>
                        <div class="progress mb-0">
                          <div
                            class="progress-bar bg-danger"
                            role="progressbar"
                            aria-valuenow="34"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "34%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">{/* <Doughnut data={data} /> */}</div>
    </div>
  );
}

export default Dashboard;
