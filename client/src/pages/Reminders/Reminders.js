import styles from "./styles.module.css";
import React from "react";
import Layout from "../../components/Layout/Layout";
import Header from "./Header";
import Calendar from "./Calendar";
import CalendarState from "./CalendarContext";
import TaskForm from "./TaskForm";
import "./rem.css";

function Reminders(userDetails) {
  const user = userDetails.user;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <Layout user={user} className="layout"></Layout>
          <div className={styles.main_heading}>Reminders</div>
          <div className="container">
            <CalendarState>
              <Header />
              <Calendar />
              <TaskForm />
            </CalendarState>
          </div>
        </div>
      </div>
    </>
  );
}
export default Reminders;
