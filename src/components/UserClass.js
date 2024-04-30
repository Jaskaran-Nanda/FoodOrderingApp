import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("C Constructor");
  }
  componentDidMount() {
    console.log("Child Component Did Mount");
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log("C Render");
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @jaskaran-nanda</h4>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count++
        </button>
        <h4>Count 1: {count}</h4>
      </div>
    );
  }
}

export default UserClass;
