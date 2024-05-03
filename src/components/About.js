import User from "./User.js";
import UserClass from "./UserClass.js";
import { Component } from "react";

const About = () => {
  return (
    <div>
      <h1 className="p-8 font-bold text-3xl">Developed by: </h1>
      <User />
    </div>
  );
};
export default About;
