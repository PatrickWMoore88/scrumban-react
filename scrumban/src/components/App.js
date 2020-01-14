import React, { Component } from "react";
// import ScrumbanBoard from "./ScrumbanBoard";
import ScrumbanList from "./ScrumbanList";
import ScrumbanActionButton from "./ScrumbanActionButton";
import { connect } from "react-redux";
import { render } from "react-dom";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h2>Scrumban</h2>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <ScrumbanList
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <ScrumbanActionButton list />
        </div>
      </div>
    );
  }
}
const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
