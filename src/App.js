import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalOpen: true });
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          toggle
        </button>
        <br></br>
        <br></br>
        <Transition in={this.state.showBlock} timeout={300}>
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: "100px",
                height: "50px",
                margin: "auto",
                transition:'opacity 0.4s ease-in-out',
                opacity:state === 'exited'?'0' : '1' 
              }}
            >
              Some Block
            </div>
          )}
        </Transition>
        <br></br>
        <br></br>

        {this.state.modalOpen ? (
          <Modal closed={this.closeModal} show={this.state.modalOpen} />
        ) : null}
        {this.state.modalOpen ? <Backdrop show={this.state.modalOpen} /> : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
