import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import { Jumbotron } from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div classname="row">
          <div classname="col-12">
            <Jumbotron />
          </div>
          <Main />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
