import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function Signup() {
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
          <img className={styles.img} src="./images/Signup.gif" alt="signup" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Create Account</h2>
          <input type="text" className={styles.input} placeholder="Username" />
          <input type="text" className={styles.input} placeholder="Email" />
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
          />
          <button className={styles.btn}>Sign Up</button>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>Sign up with Google</span>
          </button>
          <div className="buttons"></div>
          <p className={styles.loginlink}>
            Already Have Account ? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
