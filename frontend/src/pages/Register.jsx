import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) => {
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
  }
  const onSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <>
      <section className="Heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please Create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onsubmit}>
            <div className="form-group">
            <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
            </div>
            <div className="form-group">
            <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={name}
            placeholder="Enter your email"
            onChange={onChange}
          />
            </div>
            <div className="form-group">
            <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={name}
            placeholder="Enter password"
            onChange={onChange}
          />
            </div>
            <div className="form-group">
            <input
            type="password"
            className="form-control"
            name="password2"
            id="password2"
            value={name}
            placeholder="Confirm password"
            onChange={onChange}
          />
            </div>
        <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
        </div>
        </form>
      </section>
    </>
  );
}
export default Register;
