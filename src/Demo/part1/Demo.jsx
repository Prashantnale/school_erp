import React from "react";
import { useState } from "react";
import Demo1 from "./Demo1";

const Demo = () => {
  // time formating sathi phattay And return chay aat liha
  // {new Date('Aani date aat liha !! nahi lihali tar local time lagel').toGMTString()}
  // alert
  const [Alert, SetAlert] = useState(null);

  const ShowAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      SetAlert(null);
    }, 4500);
  };
  // let text = "How     are      you     doing       today?";
  // const myArray = text.split(/[]+/); praregraph madhil space remove karanaysathi
  const [myStyle, SetStyle] = useState({ color: "red", border: "solid black" });
  const [btnName, setName] = useState("Light Mode");
  const StyleFun = () => {
    if (myStyle.color === "red") {
      SetStyle({ color: "white", border: "solid red" });
      document.body.style = "background-color: black;";
      document.title = "Dark Mode";
      setName("Dark Mode");
      ShowAlert(" Dark mode has bin enabled", " Success");
    } else {
      SetStyle({ color: "red", border: "solid black" });
      setName("Light Mode");
      document.title = "Light Mode";
      document.body.style = "background-color: white ;";
      ShowAlert(" Light mode has bin enabled", " Success");
    }
  };

  //   Copy text
  const CopyText = () => {
    navigator.clipboard.writeText("Prashant nale");
  };
  return (
    <>
      <Demo1 alert={Alert} />
      <div className="container mt-5 p-2 text-center" style={myStyle}>
        <button className="btn btn-primary" onClick={StyleFun}>
          {btnName}
        </button>
        <h1>
          <button className="btn btn-danger m-2" onClick={CopyText}>
            Copy text
          </button>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          reiciendis dolorem delectus enim excepturi et in eligendi voluptate
          dignissimos cumque non optio, voluptatum eaque repudiandae praesentium
          nobis debitis est quaerat.
        </h1>
      </div>
    </>
  );
};
export default Demo;
