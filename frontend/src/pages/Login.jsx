import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
          <FaSignInAlt />
          Login
        </h1>
        <p>Login and start setting goals</p>
      </section>
      <section className="form">
        <form onSubmit={onsubmit}>
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
            <button type="submit" className="btn btn-block">Submit</button>
        </div>
        </form>
      </section>
    </>
  );
}
export default Login;
