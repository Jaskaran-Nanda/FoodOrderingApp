import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const User = () => {
  const [userInfo, setUserInfo] = useState();
  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/jaskaran-nanda");
    const json = await data.json();
    setUserInfo(json);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (userInfo === null || undefined) {
    return <Shimmer />;
  }
  console.log(userInfo);
  const { name, avatar_url } = userInfo || 0;
  return (
    <div className="user-card">
      <img
        src={avatar_url}
        style={{
          borderRadius: "50%",
          width: "140px",
          aspectRatio: "1/1",
          border: "2px solid #cecece",
        }}
      ></img>
      <h2>Name: {name}</h2>
      <h4>Contact: @jaskaran-nanda</h4>
    </div>
  );
};

export default User;
