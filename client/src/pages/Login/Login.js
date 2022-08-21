import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/Login.gif" alt="login" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Hello Again</h2>
          <h3 className={styles.form_sub_heading}>
            Welcome back! Please enter your details
          </h3>
          <input type="text" className={styles.input} placeholder="Email" />
          <input type="text" className={styles.input} placeholder="Password" />
          <div className="buttons">
            <button className={styles.btn}>Log In</button>
            <button className={styles.google_btn} onClick={googleAuth}>
              <img src="./images/google.png" alt="google icon" />
              <span>Sign in with Google</span>
            </button>
            <p className={styles.signuplink}>
              New Here ? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
