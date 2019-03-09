import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ showModal: nextProps.showModal });
  }
  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
    document
      .getElementById("close-modal")
      .addEventListener("click", this.closeModal, false);
    // document
    // .getElementById("close-modal")
    // .addEventListener("click", this.closeModal, false);
    //
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.closeModal, false);
  }

  handleKeyUp(e) {
    const { showModal } = this.state;
    let el = document.querySelector(".modalOverlay");
    console.log(showModal);
    const keys = {
      27: () => {
        e.preventDefault();
        el.classList.add("hide");
        setTimeout(() => {
          this.setState({ showModal: false });
          console.log(showModal);
        }, 100);
      }
    };
    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  //   handleOutsideClick(e) {
  //     const { showModal } = this.state;
  //     let el = document.querySelector(".modalOverlay");
  //     el.classList.add("hide");
  //     setTimeout(() => {
  //       this.setState({ showModal: false });
  //       console.log(showModal);
  //     }, 100);
  //   }
  closeModal(e) {
    const { showModal } = this.state;
    let el = document.querySelector(".modalOverlay");
    el.classList.add("hide");
    setTimeout(() => {
      this.setState({ showModal: false });
      console.log(showModal);
    }, 100);
  }
  render() {
    const { showModal, children } = this.props;
    // const { showModal } = this.props;
    // if (showModal) {
    return (
      <div
        className={
          this.state.showModal ? "modalOverlay show" : "modalOverlay hide"
        }
      >
        <div className="modal">
          <div className="modalContent">{children}</div>
        </div>

        <button
          id="close-modal"
          type="button"
          className="closeButton"
          onClick={this.handleOutsideClick}
        />
      </div>
    );
    // }

    // return null;
  }
}

// Export the component to use it in other components.
export default Modal;
