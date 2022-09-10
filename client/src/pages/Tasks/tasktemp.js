import styles from "./styles.module.css";
import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import Board from "react-trello";

function Tasks(userDetails) {
  const user = userDetails.user;

  return (
    <>
      <div className={styles.form_container}>
        <Layout user={user} className="layout"></Layout>
        <div className={styles.main_heading}>Tasks</div>
        <div className={styles.kanban}>
          <Board data={data} style={{ backgroundColor: "white" }} editable />
          <Board
            editable
            onCardAdd={this.handleCardAdd}
            data={this.state.boardData}
            draggable
            onDataChange={this.shouldReceiveNewData}
            eventBusHandle={this.setEventBus}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
          />
        </div>
      </div>
    </>
  );
}
