import React from "react";

const data = {
  velopert: {
    name: "이수현",
    description: "리액트",
  },

  gildong: {
    name: "수현",
    description: "공부시작",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다. </div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
