import React, { Component } from "react";
import axios from "axios";
class SelectAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: "",
      city: []
    };
  }
  componentDidMount() {
    // fetch(`https://api.twitter.com/user/${handle}`)
    //   .then((user) => {
    //     this.setState(() => ({ user }))
    //   })

    axios.get("/city").then(res => {
      console.log(res.data);

      this.setState({ city: res.data });
    });
  }
  render() {
    const { params } = this.props.match;
    const selectCity = this.state.city.find(city => city.name === params.name);
    if (selectCity) {
      this.state.currentCity = selectCity.name;
    }

    return <div>{this.state.currentCity}</div>;
  }
}

export default SelectAds;
