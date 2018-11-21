import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SelectCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: []
    };

    this.getcity();
    this.onSelectCity = this.onSelectCity.bind(this);
  }
  getcity() {
    axios.get("/city").then(res => {
      this.setState({ city: res.data });
    });
  }
  onSelectCity(e) {
    // e.preventDefault();
    // console.log(e.target.href);
    // this.props.history.push("/selectads");
    // this.props.history.push("/" +e.target.href)
  }

  render() {
    // console.log(city.name);
    const CityItems = this.state.city.map(d => (
      <li key={d.name} className="float-right">
        <Link to={d.name}>{d.name}</Link>
      </li>
    ));

    return (
      <ul>
        {CityItems}
        <li>
          <Link to="/قم">قم</Link>
        </li>
      </ul>
    );
  }
}

export default SelectCity;
