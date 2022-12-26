import React from "react";
import Master from "./admin/layouts/Master";
import C_index from "./admin/students/C_index";
import A_dashboard from "./admin/A_dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import C_create from "./admin/students/C_create";
import C_edit from "./admin/students/C_edit";
import S_edit from "./admin/class/S_edit";
import S_create from "./admin/class/S_create";
import S_index from "./admin/class/S_index";
import T_create from "./admin/teacher/T_create";
import T_list from "./admin/teacher/T_list";
import T_edit from "./admin/teacher/T_edit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master Component={A_dashboard} />}></Route>
          <Route
            path="/c_create"
            element={<Master Component={C_create} />}
          ></Route>
          <Route
            path="/c_edit/:id"
            element={<Master Component={C_edit} />}
          ></Route>
          <Route
            path="/c_list"
            element={<Master Component={C_index} />}
          ></Route>
          <Route
            path="/s_edit/:id"
            element={<Master Component={S_edit} />}
          ></Route>
          <Route
            path="/s_create"
            element={<Master Component={S_create} />}
          ></Route>
          <Route
            path="/s_list"
            element={<Master Component={S_index} />}
          ></Route>
          {/* Teacher Routes */}

          <Route path="/t_create" element={<Master Component={T_create} />} />
          <Route path="/t_list" element={<Master Component={T_list} />} />
          <Route path="/t_edit/:id" element={<Master Component={T_edit} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
