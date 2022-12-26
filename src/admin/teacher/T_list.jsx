import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const T_index = () => {
  const notify = () => toast.error("Record Delete Successfully");
  const [Class, SetClass] = useState([]);
  const LoadClass = () => {
    axios
      .get(`http://localhost:2000/teacher`)
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
      .delete(`http://localhost:2000/teacher/${id}`)
      .then(function (response) {
        LoadClass();
        notify();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Search Array
  const OnInputs = (e) => {
    if (e.target.value === "") {
      LoadClass();
    } else {
      var filtered = Class.filter((p) =>
        String(p.t_name).startsWith(e.target.value)
      );
      SetClass(filtered);
    }
  };
  // PDF down
  const PDF = () => {
    const doc = new jsPDF();
    autoTable(doc, { html: "#my-table" });
    doc.save("Teacher.pdf");
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="main-card mb-3 card">
            <div className="card-header">
              Teacher List
              <CSVLink
                data={Class}
                filename={"Teacher.csv"}
                className="bg-info p-2 ml-5"
              >
                Excel
              </CSVLink>
              <Link to onClick={PDF} className="bg-success p-2">
                PDF
              </Link>
              <div className="btn-actions-pane-right d-flex">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => OnInputs(e)}
                  />
                </div>
                <div role="group" className="btn-group-sm btn-group">
                  <Link className="btn btn-success mx-2" to="/t_create">
                    Add
                  </Link>
                </div>
              </div>
            </div>

            <div className="table-responsive">
              <table
                id="my-table"
                className="align-middle mb-0 table table-borderless table-striped table-hover text-center"
              >
                <thead>
                  <tr>
                    <th className="text-center">Sr.No</th>
                    <th>Teacher Name</th>
                    <th className="text-center">Mob No</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Address</th>
                    <th className="text-center">Education</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Class.map((iteam, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{iteam.t_name}</td>
                      <td>{iteam.t_mob_no}</td>
                      <td>{iteam.t_email}</td>
                      <td>{iteam.t_address}</td>
                      <td>{iteam.t_education}</td>
                      <td className="text-center d-flex">
                        <Link
                          className="btn btn-success"
                          to={`/t_edit/${iteam.id}`}
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </Link>

                        <Link
                          className="btn btn-danger mx-2"
                          onClick={() => Deleted(iteam.id)}
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default T_index;
