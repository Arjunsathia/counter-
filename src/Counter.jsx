import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  updateByAmount,
} from "./redux/slices/counterSlice";

function Counter() {
  const countState = useSelector((state) => state.counterSlice.count);
  const dispatch = useDispatch();
  const [inp, setInp] = useState(0);
  // console.log(countState);
  return (
    <>
      <div
        className="bg-dark d-flex container-fluid justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="w-50 p-3 border border-light border-2 shadow">
          <h2 className="text-light text-center my-3">Counter</h2>
          <h1 className="text-center mb-4 text-success">{countState}</h1>
          <div className="container">
            <div className="row gap-3">
              <button
                className="btn btn-success col"
                onClick={() => {
                  dispatch(increment());
                }}
              >
                Increment +
              </button>
              <button
                className="btn btn-info col"
                onClick={() => {
                  dispatch(reset());
                }}
              >
                Reset
              </button>
              <button
                className="btn btn-danger col"
                onClick={() => {
                  dispatch(decrement());
                }}
              >
                Decrement -
              </button>
            </div>
            <div className="my-2">
              <div className="row">
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Number"
                    name="number"
                    onChange={(e) => setInp(e.target.value)}
                  />
                </div>
                <div className="col-3 d-grid">
                  <button
                    className="btn  btn-secondary"
                    onClick={() => dispatch(updateByAmount(parseInt(inp)))}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
