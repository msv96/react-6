import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function EditUser(props) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [mail, setMail] = useState("");
  const [salary, setSalary] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let fetchData = async () => {
      try {
        let users = await axios.get(
          `https://60f460de3cb0870017a8a216.mockapi.io/users/${props.match.params.id}`
        );
        setName(users.data.name);
        setPosition(users.data.position);
        setMail(users.data.mail);
        setSalary(users.data.salary);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props]);

  let handleSubmit = async (el) => {
    el.preventDefault();
    try {
      setLoading(true);
      await axios.put(
        `https://60f460de3cb0870017a8a216.mockapi.io/users/${props.match.params.id}`,
        { name, position, mail, salary }
      );
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
        <h1 className="h3 mb-0 text-gray-800">Update User</h1>
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
                  setMail(el.target.value);
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
                value="Update"
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
export default EditUser;
