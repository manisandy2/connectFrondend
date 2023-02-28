import React from "react";
import "./Styles/classadd.css";

function ClassAdd() {
  return (
    <div className="full-box">
    
      <div className="container">
      <h2>Add Class</h2>
        <form>
          <label>Name</label>
          <input type={"text"}></input>
          <label>Status</label>
          <input type={"text"}></input>
          <button>Click</button>
        </form>
      </div>
    </div>
  );
}

export default ClassAdd;
