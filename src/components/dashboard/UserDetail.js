import React from "react";

function UserDetail(props) {
  console.log(props);
  return <div>My use id is : {props.match.params.id}</div>;
}

export default UserDetail;
