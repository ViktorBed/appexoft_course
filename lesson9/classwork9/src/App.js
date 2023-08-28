import React from "react";
import "./App.css";
import Componentt from "./componnents/Componnents";

const styles = {
  margin: "60px",
};
class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "red" }}>
        <h1 style={styles}>Hellow world</h1>
        <p className="paragraph">i am 2000 points in the desk</p>
        <Componentt age={24} isFrontendend="React" />
      </div>
    );
  }
}

export default App;
