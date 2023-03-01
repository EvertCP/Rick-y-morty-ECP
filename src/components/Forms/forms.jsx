import React, { useState } from "react";
import styles from "./index.module.css";
import { validate } from "./validate";

export default function Form(props) {
  const { login, successLogin } = props;
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    ...userData,
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.card}>
      <form
        className={styles.loginForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className={styles.formItem}>
          <p className={styles.title}>Registro</p>
          
        </div>
        <div className={styles.field}>
        <label className={styles.label}>Username</label>
          <input
            className={/*errors.password ? styles.warning :*/ styles.input}
            type="text"
            // placeholder="Ingresa tu email"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          <span className={styles.bar}></span>
          <span className={styles.error}>{errors.username}</span>
          <label className={styles.label}>Password</label>
          <input
            className={/*errors.password ? styles.warning :*/ styles.input}
            type="password"
            // placeholder="Ingresa tu contraseña"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <span className={styles.bar}></span>
          <span className={styles.error}>{errors.password}</span>
        </div>
        <div className={styles.formItem}>
          <button className={styles.btn}
            type="submit"
            disabled={Object.keys(errors).length ? true : false}
          >
            LOGIN
          </button>
          <span className={styles.error}>{successLogin}</span>
        </div>
      </form>
      <div className={styles.datosAcceso}>
        <div className={styles.icon}>
          <div className={styles.tooltip}>
            <p>Usuario: example@gmail.com</p>
            <p>contraseña: password1</p>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
}