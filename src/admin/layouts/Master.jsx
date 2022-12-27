import React, { useEffect, useState } from "react";
import Data from "./DataSiteBar.json";
import Iteam from "./Iteam";
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from "react-router-dom";

const Master = (props) => {
  // set bar prograss
  const [progress, setProgress] = useState(0);
  const listen = useNavigate();
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 400);
  }, [listen]);
  // set bar prograss end

  const Cmp = props.Component;

  // btn side bar
  const [Open, SetOpen] = useState(false);
  const SideMain = document.body.classList;
  if (Open) {
    SideMain.add("closed-sidebar");
  } else {
    SideMain.remove("closed-sidebar");
  }
  return (
    <>
      <LoadingBar
        color="red"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
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
                onClick={() => SetOpen(!Open)}
                type="button"
                className={
                  Open
                    ? "hamburger close-sidebar-btn hamburger--elastic"
                    : "hamburger close-sidebar-btn hamburger--elastic is-active"
                }
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
            <button
              type="button"
              className="btn-shadow p-2 btn btn-primary btn-sm show-toastr-example"
            >
              Log in
            </button>
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
