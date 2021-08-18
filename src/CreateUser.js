import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [mail, setOffice] = useState("");
  const [salary, setSalary] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  let handleSubmit = async (el) => {
    el.preventDefault();
    try {
      setLoading(true);
      await axios.post(`https://60f460de3cb0870017a8a216.mockapi.io/users`, {
        name,
        position,
        mail,
        salary,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(el) => {
                  setName(el.target.value);
                }}
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
              />
            </div>
            <div className="col-lg-6">
              <label>Email ID</label>
              <input
                type="text"
                className="form-control"
                value={mail}
                onChange={(el) => {
                  setOffice(el.target.value);
                }}
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
              />
            </div>
            <div className="col-lg-12">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary mt-3"
                disabled={loading}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default CreateUser;
