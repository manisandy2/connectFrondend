import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShowroomDetails() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await Axios.get("http://127.0.0.1:8000/api/showroom/");
    const products = data.results;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container-box">
      <h2>
      ShowroomDetails
        </h2>
        <div className="createButton">
        <Link className="linkbutton" to="/OutletMedia/add/Showroom"> + Show Room </Link>
      </div>

      <table>
        <thead>
          <tr>
            <td>S No</td>
            <td>Showroom</td>
            {/* <td>RSM</td>
            <td>ASM</td> */}
            <td>Manager</td>
            <td>CUG No</td>
            <td>Landline</td>
            <td>E-Mail</td>
            <td>Region</td>
            <td>State</td>
            <td>Address</td>
          </tr>
        </thead>
        {products.map((product,i) => (
          <tbody>
            <tr key={i}>
              <td> {product.id}</td>
              <td> {product.name}</td>
              {/* <td> {product.RSM.name}</td> */}
              {/* <td >  { product.ASM.name ?  product.ASM.name : []}</td> */}
              {/* <td > {product.ASM.name || [] ?  product.ASM.name : product.ASM.name}  </td>   */}

              <td key={product.id}> {product.Manager.name}</td>

              <td> {product.CUG_NO}</td>
              <td> {product.Landline}</td>
              <td> {product.E_Mail}</td>
              <td> {product.Region.name}</td>
              <td> {product.State.name}</td>
              <td> {product.Address}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default ShowroomDetails;

// {infoData.map((object, i) => {
//     return (
//       <div key={i}>
//         {[
//           object.name,

//           <b className="fosfo" key={i}>
//             {" "}
//             {object.city}{" "}
//           </b>,
//           object.age,
//         ]}
//       </div>
//     );
//   })}
