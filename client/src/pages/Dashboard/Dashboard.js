import styles from "./styles.module.css";
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";

function Dashboard(userDetails) {
  const user = userDetails.user;

  return (
    <>
      <div className={styles.form_container}>
        <Layout user={user} className="layout"></Layout>

        <div className={styles.main_heading}>Dashboard</div>
      </div>
    </>
  );
}

export default Dashboard;
