import User from "./User.js";
import UserClass from "./UserClass.js";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    //                                                               Called First
    super(props);
    console.log("P Constructor");
  }
  componentDidMount() {
    //                                                               Called Last
    console.log("Parent Component Did Mount");
  }
  render() {
    //                                                               Called Second
    console.log("P Render");
    return (
      <div>
        <h1>About Us!</h1>
        <h2>This is Namaste Food Delivery App!</h2>
        <UserClass name={"Jaskaran Nanda (class)"} location={"Dubai (class)"} />
      </div>
    );
  }
}
export default About;
