import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

const C_index = () => {
  const [Class, SetClass] = useState([]);
  const LoadClass = () => {
    axios
      .get(`http://localhost:2000/student`)
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
      .delete(`http://localhost:2000/student/${id}`)
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
              Student List
              <CSVLink data={Class} className="btn btn-success mx-2">
                Export Student
              </CSVLink>
              <div className="btn-actions-pane-right">
                <div role="group" className="btn-group-sm btn-group">
                  <Link className="btn btn-success" to="/c_create">
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
                    <th>Full Name</th>
                    <th className="text-center">Mob No</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Address</th>
                    <th className="text-center">class</th>
                    <th className="text-center">Marks</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Class.map((item, index) => (
                    <tr key={index}>
                      <td className="text-center text-muted">{index + 1}</td>
                      <td className="text-center">{item.name}</td>
                      <td>{item.mobile}</td>
                      <td>{item.email}</td>
                      <td>{item.address1}</td>
                      <td className="text-center">{item.class}</td>
                      <td className="text-center">
                        <div className="badge badge-warning">{item.mark}%</div>
                      </td>
                      <td className="text-center d-flex">
                        <Link
                          className="btn btn-success"
                          to={`/c_edit/${item.id}`}
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

export default C_index;
