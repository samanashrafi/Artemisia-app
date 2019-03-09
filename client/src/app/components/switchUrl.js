import React, { Component } from "react";
import SelectAds from "src/js/pages/home/SelectAds";

class switchUrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewForm: false
    };

    // window.document.body.addEventListener("mousemove", this.onchange);
    this.componentLoaded = null; //this
    this.onchange = this.onchange.bind(this);
   
  }
  componentWillMount(){
    this.onchange();
  }
  componentWillUnmount(){
    this.state.viewForm = false;
  }
  compoen
  onchange() {
    let geturl = window.location.pathname;
    // console.log(window.location.pathname);
    let urlDecode = decodeURI(geturl);
    switch (urlDecode) {
      case "/تهران":
        console.log(decodeURI(geturl));
        this.componentLoaded = <SelectAds />;
        this.state.viewForm = true;
        break;
      case "/کرج":
        console.log(decodeURI(geturl));
        this.componentLoaded = <SelectAds />;
        this.state.viewForm = true;

        break;
      default:
        this.componentLoaded = "null";
    }
    console.log(this.state);
  }
  render() {
    return <div>{this.state.viewForm ? this.componentLoaded : ""} </div>;
  }
}
export default switchUrl;
