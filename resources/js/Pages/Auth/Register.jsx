import { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { setField, resetForm } from "../../redux/store";

export default function Register() {
  const dispatch = useDispatch();
  const { errors } = usePage().props;
  const values = useSelector((state) => state.registerForm);

  function handleChange(e) {
    dispatch(setField({ field: e.target.name, value: e.target.value }));
  }

  function handleSubmit(e) {
    console.log('values:', values);
    e.preventDefault();
    router.post('/register', values);
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h1>Ticketgol Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
        <div>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} />
          {errors.name && <div className="text-red-500">{errors.name}</div>}
        </div>

        <div>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          {errors.password && <div className="text-red-500">{errors.password}</div>}
        </div>
        <div>
          <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={handleChange} required />
          {errors.password_confirmation && <div className="text-red-500">{errors.password_confirmation}</div>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
