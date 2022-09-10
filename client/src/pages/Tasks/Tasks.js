import styles from "./styles.module.css";
import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import Board from "react-trello";
const data = {
  lanes: [
    {
      id: "lane1",
      title: "Planned Tasks",
      label: "2/2",
      cards: [
        {
          id: "Card1",
          title: "Write Blog",
          description: "Can AI make memes",
          label: "30 mins",
          draggable: false,
        },
        {
          id: "Card2",
          title: "Pay Rent",
          description: "Transfer via NEFT",
          label: "5 mins",
          metadata: { sha: "be312a1" },
        },
      ],
    },
    {
      id: "lane2",
      title: "Completed",
      label: "0/0",
      cards: [],
    },
  ],
};
export default function Tasks(userDetails) {
  const user = userDetails.user;

  return (
    <>
      <div className={styles.form_container}>
        <Layout user={user} className="layout"></Layout>
        <div className={styles.main_heading}>Tasks</div>
        <div className={styles.kanban}>
          <Board
            data={data}
            editable
            canAddLanes
            styles={{ backgroundColor: "red" }}
          />
        </div>
      </div>
    </>
  );
}
