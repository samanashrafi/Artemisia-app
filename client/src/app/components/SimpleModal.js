import React, { Component } from "react";

class SimpleModal extends Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleKeyUp(e) {
    const { onCloseRequest } = this.props;
    let el = document.querySelector(".modalOverlay");

    const keys = {
      27: () => {
        el.classList.add("hide");
        setTimeout(() => {
          onCloseRequest();
        }, 100);
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  handleOutsideClick(e) {
    const { onCloseRequest } = this.props;

    // if (!isNil(this.modal)) {
    //   if (!this.modal.contains(e.target)) {
    //     onCloseRequest();
    //     document.removeEventListener("click", this.handleOutsideClick, false);
    //   }
    // }
  }

  render() {
    const { onCloseRequest, children } = this.props;

    return (
      <div className="modalOverlay">
        <div className="modal">
          <div className="modalContent">{children}</div>
        </div>

        <button
          type="button"
          className="closeButton"
          onClick={onCloseRequest}
        />
      </div>
    );
  }
}

// Export the component to use it in other components.
export default SimpleModal;
