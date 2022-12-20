import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const S_edit = () => {
  const { id } = useParams();
  const Redirect = useNavigate();
  const [Class, SetClass] = useState({
    id: "",
    Classs: "",
  });
  const OnInputs = (e) => {
    SetClass({ ...Class, [e.target.name]: e.target.value });
  };

  const GetSingal_Recored = () => {
    axios
      .get(`http://localhost:2000/class/${id}`)
      .then(function (response) {
        SetClass(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Onsubmited = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:2000/class/${id}`, Class)
      .then(function (response) {
        Redirect("/s_list");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    GetSingal_Recored();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="main-card mb-3 card">
            <div className="card-header">
              Class Add
              <div className="btn-actions-pane-right">
                <div role="group" className="btn-group-sm btn-group">
                  <Link className="btn btn-success" to="/s_list">
                    View List
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-5">
              <form className="row g-3" onSubmit={(e) => Onsubmited(e)}>
                <div className="col-md-6">
                  <input
                    type="hidden"
                    className="form-control"
                    name="id"
                    id="inputEmail4"
                    value={Class.id}
                    onChange={(e) => OnInputs(e)}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    Class
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Classs"
                    id="inputEmail4"
                    value={Class.Classs}
                    onChange={(e) => OnInputs(e)}
                  />
                </div>
                <div className="col-12 mt-5 text-center">
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

export default S_edit;
