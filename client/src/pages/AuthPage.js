import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";

export const AuthPage = () => {
  const { loading, request } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = request('/api/auth/register', 'POST', { ...form })
      console.log('Data', data)
    } catch (e) {}
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Reduce Link</h1>
        <div className="card blue darken-4">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>
              <div className="input-field">
                <input
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input white-text"
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input white-text"
                  onChange={handleInputChange}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
            className="btn yellow darken-4"
            disabled={loading}
            style={{ marginRight: 10 }}
            >
              Sign In
            </button>
            <button
            className="btn grey lighten-1 black-text"
            disabled={loading}
            onClick={registerHandler}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
