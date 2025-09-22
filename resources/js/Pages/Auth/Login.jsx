import { useState } from "react";
import { router, usePage } from "@inertiajs/react";

export default function Login() {
  const { errors } = usePage().props;
  const [values, setValues] = useState({ email: "", password: "" });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.post("/login", values);
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h1>Login</h1>
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
