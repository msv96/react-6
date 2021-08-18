import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import ProductContext from "./ProductContext";
function CreateProduct() {
  const [userName, setUserName] = useState("");
  const [position, setPosition] = useState("");
  const [office, setOffice] = useState("");
  const [age, setAge] = useState("");
  const [startDate, setStartDate] = useState("");
  const [salary, setSalary] = useState("");
  
  const productContext = useContext(ProductContext);
  const history = useHistory();
  
  let handleSubmit = (el) => {
    el.preventDefault();
    let productData = { userName, position, office, age, startDate, salary };
    productContext.setProductList([...productContext.productList, productData]);
    history.push("/user");
  };
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Create User</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={userName}
                
                onChange={(el) => {
                  setUserName(el.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                type="text"
                className="form-control"
                value={position}
                onChange={(el) => {
                  setPosition(el.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label>Office</label>
              <input
                type="text"
                className="form-control"
                value={office}
                onChange={(el) => {
                  setOffice(el.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input
                type="text"
                className="form-control"
                value={age}
                onChange={(el) => {
                  setAge(el.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label>Start Date</label>
              <input
                type="date"
                className="form-control"
                value={startDate}
                onChange={(el) => {
                  setStartDate(el.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label>Salary</label>
              <input
                type="text"
                className="form-control"
                value={salary}
                onChange={(el) => {
                  setSalary(el.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-12">
            <input
                type="submit"
                value="Submit"
                className="btn btn-primary mt-3"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default CreateProduct;