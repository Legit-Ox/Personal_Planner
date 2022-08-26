import styles from "./styles.module.css";
import React from "react";
import Layout from "../../components/Layout/Layout";
function Reminders(userDetails) {
  const user = userDetails.user;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <Layout user={user} className="layout"></Layout>
          <div className={styles.main_heading}>Reminders</div>
        </div>
      </div>
    </>
  );
}

export default Reminders;
