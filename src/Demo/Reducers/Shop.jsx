import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Inc, Dec } from "../../States/Reduces/productSlice";

function Shop() {
  const dispatch = useDispatch();
  const curState = useSelector((state) => state.number);

  return (
    <>
      <div className="text-center mt-5">
        <img
          src="https://opsg-img-cdn-gl.heytapimg.com/epb/202205/25/cAbXEzPky2G4CQGD.png"
          alt="img"
          width="120px"
          height="100px"
        />
        <p>
          <b>Vivo Ru-: {curState}/-</b>
        </p>
        <div className="d-flex justify-content-center">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => dispatch(Dec())}
            >
              -
            </button>
            <button type="button" className="btn btn-info">
              Add this item
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => dispatch(Inc())}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
