import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = { modalIsOpen: false, showBlock: false };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  toggleBlock = () => {
    this.setState((prevState) => ({ showBlock: !prevState.showBlock }));
  };

  redSquare = (
    <div
      style={{
        backgroundColor: 'red',
        width: 100,
        height: 100,
        margin: 'auto',
      }}
    ></div>
  );

  render() {
    return (
      <div className='App'>
        <h1>React Animations</h1>
        <button className='Button' onClick={this.showModal}>
          Open Modal
        </button>
        <br />
        <button className='Button' onClick={this.toggleBlock}>
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {/* {(state) => <p>{state}</p>} */}
          {(state) => (
            <div
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                transition: 'opacity 1s easy-out',
                opacity: state === 'exiting' ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>
        <Transition
          in={this.state.modalIsOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition>
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }

  //pouzitie css-transitions a css-animations...vid Backdrop.css a Modal.css
  //musel som to ale zakomentovat, lebo s tym Toggle to uz potom vobec nechodi
  /*render() {
    return (
      <div className='App'>
        <h1>React Animations</h1>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        <Backdrop show={this.state.modalIsOpen} />
        <button className='Button' onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }*/
}

export default App;
