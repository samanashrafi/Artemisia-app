import React, { Component } from "react";
import axios from "axios";
class SelectAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: {},
      city: []
    };
  }
  componentDidMount() {
    // fetch(`https://api.twitter.com/user/${handle}`)
    //   .then((user) => {
    //     this.setState(() => ({ user }))
    //   })
    const { params } = this.props.match;

    axios.get("/city").then(res => {
      console.log(res.data);

      this.setState({ city: res.data });
    });
debugger
    const selectCity = this.state.city.find(city => city.name === params.name);
  }
  render() {

    // if (selectCity) {
    //   this.setState({ currentCity: selectCity });
    // }

    return <div></div>;
  }
}

export default SelectAds;
