import * as React from "react";

function Navbar() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "white" }}
        >
          <div className="container-fluid" style={{ backgroundColor: "white" }}>
              <a href='/' style={{textDecoration: "none"}}><h2 style={{fontWeight: "bolder"}}><label style={{color: "#172645", cursor: "pointer"}}>CryptoData</label> Retriever</h2></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                <li className="nav-item mx-2">
                  <a
                    style={{ color: "#172645" }}
                    className="nav-link active menuitems"
                    aria-current="page"
                    href="/"
                  >
                    <i
                      className="fa fa-house-user"
                      style={{ fontSize: "20px" }}
                    ></i>{" "}
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link menuitems"
                    href="https://github.com/renisal/cryptodata-retriever"
                  >
                    <i
                      className="fa fa-code-fork"
                      style={{ fontSize: "20px" }}
                    ></i>{" "}
                    Source
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link menuitems"
                    href="https://github.com/renisal/cryptodata-retriever/issues/new/choose"
                  >
                    <i className="fa fa-edit" style={{ fontSize: "20px" }}></i>{" "}
                    Bug Report
                  </a>
                </li>
                <li className="nav-item" style={{ marginLeft: "20rem" }}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                    href="https://github.com/renisal"
                    style={{ cursor: "default", color: "#696969" }}
                  >
                    <i className="fa fa-user" style={{ fontSize: "20px" }}></i> by{" "}
                    <label style={{ color: "#172645", cursor: "pointer" }}>
                      renisal
                    </label>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Navbar;