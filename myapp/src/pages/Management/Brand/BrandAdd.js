import Axios from "axios";
import React, { useEffect, useState } from "react";
// import "./Styles/classadd.css";
import { Link,useNavigate } from "react-router-dom";


function BrandAdd() {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(`http://127.0.0.1:8000/api/status/`);
      const products = data.results;
      setProducts(products);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();


  const productPost = (e) => {
    e.preventDefault();
    Axios.post("http://127.0.0.1:8000/api/classPost/", {
      name,
      status: productName,
    })
      .then((res) => navigate('/Management/class/'))
      // .then((res) => console.log("posting data", res))
      .catch((err) => console.log(err));
  
    };


  const handleChange = (e) => {
    setProductName(e.target.value);
  };


  return (
    <div className="full-box">
      <div className="container">
        <h2>Brand Add</h2>
        <form >
          <label>Name</label>
          <input
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>

          <label>Status</label>
          <select value={productName} onChange={handleChange}>
            <option value="">Choose Status</option>

            {products.map((product, index) => (
              <option value={product.id} key={index}>
                {product.name}
              </option>
            ))}
          </select>
  
     
          <button onClick={productPost}> Click </button>
          <button onClick= {() => navigate('/Management/class/')}> Back </button>
          
        </form> 
      </div>
    </div>
  )
}

export default BrandAdd
