import React, { useEffect, useState } from "react";
// import Axios from "axios";
import "./Styles/class.css";
import { Link } from "react-router-dom";
// import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "@mui/system";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import ApiService from "../../../service/ApiService";

export default function ClassManagement() {
  const [products, setproducts] = useState([]);


  useEffect(() => {
    getAllClass();
  }, []);

  const getAllClass = async ()  => {
    const { data }  = await ApiService.getAllClass()
      // .then(res=>{products(res.data); console.log(res.data)})
      // .catch((e) => console.log(e));
      const products = data.results
      setproducts(products)
      
  }

  function deleteClass(e,id) {
    e.preventDefault();
    ApiService.deleteClass(id).then(getAllClass()).catch(
      e=>console.log(e)
    )
  }

  return (
    <Container>
      <div>
        <h2>Class Management</h2>

        <Link to="/Management/add/class">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
        <br/>
        <br/>
        <table>
          <thead>
            <th>S No</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr id={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.status.name}</td>
                <td>
                  <Link to={"/Management/add/class/" + product.id}>
                    <span className="update">
                      <FaIcons.FaEdit />
                    </span>
                  </Link>
                  <span>
                    <a onClick={(e) => {deleteClass(e,product.id)}}>
                    <AiIcons.AiFillDelete />
                    </a>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
