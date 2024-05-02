import User from "./User.js";
import UserClass from "./UserClass.js";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    //                                                               Called First
    super(props);
  }
  componentDidMount() {
    //                                                               Called Last
  }
  render() {
    //                                                               Called Second

    return (
      <div>
        <h1>About Us!</h1>
        <h2>This is Namaste Food Delivery App!</h2>
        <User />
      </div>
    );
  }
}
export default About;
