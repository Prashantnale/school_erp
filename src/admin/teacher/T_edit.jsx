import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const C_edit = () => {
  const { id } = useParams();
  const Redirect = useNavigate();
  const [Class, SetClass] = useState([]);
  const [Student, SetStudent] = useState({
    id: "",
    t_name: "",
    t_mob_no: "",
    t_address: "",
    t_email: "",
    t_education: "",
  });

  const LoadTeacher = () => {
    axios
      .get(`http://localhost:2000/teacher/${id}`)
      .then(function (response) {
        SetStudent(response.data);
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
      .put(`http://localhost:2000/teacher/${id}`, Student)
      .then(function (response) {
        Redirect("/t_list");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    LoadTeacher();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="main-card mb-3 card">
            <div className="card-header">
              Teacher Edit
              <div className="btn-actions-pane-right">
                <div role="group" className="btn-group-sm btn-group">
                  <Link className="btn btn-success" to="/t_list">
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
                    name="t_name"
                    value={Student.t_name}
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
                    name="t_mob_no"
                    value={Student.t_mob_no}
                    className="form-control"
                    id="inputPassword4"
                    onChange={(e) => OnInputs(e)}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="inputAddress" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    name="t_email"
                    value={Student.t_email}
                    className="form-control"
                    id="inputAddress"
                    onChange={(e) => OnInputs(e)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Eduction
                  </label>
                  <input
                    type="text"
                    name="t_education"
                    value={Student.t_education}
                    className="form-control"
                    id="inputAddress2"
                    onChange={(e) => OnInputs(e)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    name="t_address"
                    value={Student.t_address}
                    className="form-control"
                    onChange={(e) => OnInputs(e)}
                  />
                </div>

                <div className="col-12 mt-3 text-center">
                  <button type="submit" className="btn btn-primary">
                    Update
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

export default C_edit;
