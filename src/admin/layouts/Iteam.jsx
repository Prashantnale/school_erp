import React, { useState } from "react";
import { Link } from "react-router-dom";

const Iteam = ({ item }) => {
  const [Open, SetOpen] = useState(false);

  if (item.childrens) {
    return (
      <>
        <li className="app-sidebar__heading">{item.title}</li>
        <li className={Open ? "mm-active" : ""}>
          <Link onClick={() => SetOpen(!Open)}>
            <i className={item.icon1}></i>
            {item.sub_title}
            <i className={item.icon2}></i>
          </Link>
          <ul className={Open ? "mm-collapse mm-show" : "mm-collapse"}>
            {item.childrens.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className="app-sidebar__heading">{item.title}</li>
        <li>
          <Link to={item.path} className="mm-active">
            <i className={item.icon}></i>
            {item.sub_title}
          </Link>
        </li>
      </>
    );
  }
};

export default Iteam;
