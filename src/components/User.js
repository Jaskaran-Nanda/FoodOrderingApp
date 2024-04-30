import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Dubai</h3>
      <h4>Contact: @jaskaran-nanda</h4>
      <h4>Count 1: {count}</h4>
    </div>
  );
};

export default User;
