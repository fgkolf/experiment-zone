import React, {Component} from 'react';
import ReactNewWindow from 'react-new-window';
import Modal from "react-responsive-modal";

const modalStyle = {
  width: "200px",
  height: "200px",
  textAlign: 'center',
  verticalAlign: "middle",
  lineHeight: '200px'
};

class TestPopup extends Component {
  constructor() {
    super();
    this.state = {isPopupShown: false, isBlocked: false}
  }

  render() {
    return (
      <>
        <button onClick={() => {
          setTimeout(() => this.setState({isPopupShown: true}), 3000)
        }}>
          React window popup
        </button>
        {this.state.isPopupShown &&
        <ReactNewWindow
          name="myTestWindow"
          url="http://www.google.com"
          onUnload={() => {
            this.setState({isPopupShown: false});
          }}
          onBlock={() => {
            this.setState(state => ({...state, isBlocked: true}))
          }}
        />}
        <Modal
          open={this.state.isBlocked}
          onClose={() => {
            this.setState(state => ({...state, isBlocked: false}))
          }}
          center>
            <div style={modalStyle}>Try allowing popups</div>
        </Modal>
      </>
    );
  }
}

export default TestPopup;
