import React from "react";
import Data from "./DataSiteBar.json";
import Iteam from "./Iteam";

const Master = (props) => {
  const Cmp = props.Component;
  return (
    <>
      <div className="app-header header-shadow">
        <div className="app-header__logo">
          <img
            src={require("../img/fev.png")}
            alt="logo"
            width="50px"
            height="50px"
          />
          <div className="header__pane ml-auto">
            <div>
              <button
                type="button"
                className="hamburger close-sidebar-btn hamburger--elastic"
                data-class="closed-sidebar"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="app-header__content">
          <div className="app-header-right">
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-right header-user-info ml-3">
                    <button
                      type="button"
                      className="btn-shadow p-2 btn btn-primary btn-sm show-toastr-example"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-main">
        <div className="app-sidebar sidebar-shadow">
          <div className="scrollbar-sidebar">
            <div className="app-sidebar__inner">
              <ul className="vertical-nav-menu">
                {Data.map((item, index) => (
                  <Iteam key={index} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="app-main__outer">
          <div className="app-main__inner">
            <Cmp></Cmp>
          </div>
        </div>
      </div>
    </>
  );
};

export default Master;
