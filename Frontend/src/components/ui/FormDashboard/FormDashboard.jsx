import { useState } from "react";

const FormDashboard = ({
  setDraftSection,
  section,
}) => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // handle typing logic

  const handleChange = (e) => {

    const updatedData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(updatedData);

    // check if inputs contain data

    const hasData =
      updatedData.email.trim() !== "" ||
      updatedData.password.trim() !== "";

    // update sidebar badge

    if (hasData) {
      setDraftSection(section);
    } else {
      setDraftSection("");
    }
  };


  return (

    <div className="container">

      <form>

        <div className="mb-3">

          <label
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
            Email address
          </label>

          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <div
            id="emailHelp"
            className="form-text"
          >
            We'll never share your email with anyone else.
          </div>

        </div>

        <div className="mb-3">

          <label
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            Password
          </label>

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

        </div>

        <div className="mb-3 form-check">

          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />

          <label
            className="form-check-label"
            htmlFor="exampleCheck1"
          >
            Check me out
          </label>

        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>

      </form>

    </div>
  );
};

export default FormDashboard;