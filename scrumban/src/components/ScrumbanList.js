import React from "react";
import ScrumbanCard from "./ScrumbanCard";
import ScrumbanActionButton from "./ScrumbanActionButton";
// import { CardActions } from "@material-ui/core";

const ScrumbanList = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map(card => (
        <ScrumbanCard key={card.id} text={card.text} />
      ))}
      <ScrumbanActionButton />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8
  }
};

export default ScrumbanList;
