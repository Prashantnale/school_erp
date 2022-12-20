import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const C_create = () => {
  const Redirect = useNavigate();
  const [Class, SetClass] = useState([]);
  const [Student, SetStudent] = useState({
    id: "",
    mark: "",
    class: "",
    address1: "",
    email: "",
    mobile: "",
    name: "",
  });
  const LoadClass = () => {
    axios
      .get(`http://localhost:2000/class`)
      .then(function (response) {
        SetClass(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const OnInputs = (e) => {
    SetStudent({ ...Student, [e.target.name]: e.target.value });
  };
  const Onsubmited = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:2000/student`, Student)
      .then(function (response) {
        Redirect("/c_list");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    LoadClass();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="main-card mb-3 card">
            <div className="card-header">
              Student Add
              <div className="btn-actions-pane-right">
                <div role="group" className="btn-group-sm btn-group">
                  <Link className="btn btn-success" to="/c_list">
                    View List
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-5">
              <form className="row g-3" onSubmit={(e) => Onsubmited(e)}>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={Student.name}
                    className="form-control"
                    id="inputEmail4"
                    onChange={(e) => OnInputs(e)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    Mob No
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    value={Student.mobile}
                    className="form-control"
                    id="inputPassword4"
                    onChange={(e) => OnInputs(e)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={Student.email}
                    className="form-control"
                    id="inputAddress"
                    onChange={(e) => OnInputs(e)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address1"
                    value={Student.address1}
                    className="form-control"
                    onChange={(e) => OnInputs(e)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    Class
                  </label>
                  <select
                    name="class"
                    className="form-select form-select-lg mb-3 form-control"
                    onChange={(e) => OnInputs(e)}
                  >
                    <option>Open this select menu</option>
                    {Class.map((iteam, index) => (
                      <option key={index + 1} value={iteam.id}>
                        {iteam.Classs}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Marks %
                  </label>
                  <input
                    type="number"
                    name="mark"
                    value={Student.mark}
                    className="form-control"
                    id="inputAddress2"
                    onChange={(e) => OnInputs(e)}
                  />
                </div>
                <div className="col-12 mt-3 text-center">
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default C_create;
