import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const S_index = () => {
  const [Class, SetClass] = useState([]);
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
  useEffect(() => {
    LoadClass();
  }, []);

  const Deleted = (id) => {
    axios
      .delete(`http://localhost:2000/class/${id}`)
      .then(function (response) {
        LoadClass();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="main-card mb-3 card">
            <div className="card-header">
              Class List
              <div className="btn-actions-pane-right">
                <div role="group" className="btn-group-sm btn-group">
                  <Link className="btn btn-success" to="/s_create">
                    Add
                  </Link>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="align-middle mb-0 table table-borderless table-striped table-hover text-center">
                <thead>
                  <tr>
                    <th className="text-center">Sr.No</th>
                    <th>Class Name</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Class.map((item, index) => (
                    <tr key={index}>
                      <td className="text-center text-muted">{index + 1}</td>
                      <td>{item.Classs}</td>
                      <td className="text-center">
                        <Link
                          className="btn btn-success"
                          to={`/s_edit/${item.id}`}
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                        <Link
                          className="btn btn-danger mx-2"
                          onClick={() => Deleted(item.id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default S_index;
