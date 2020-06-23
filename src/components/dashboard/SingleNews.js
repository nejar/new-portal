import React from "react";

function SingleNews(props) {
  return <div>The id of this news is : {props.match.params.id}</div>;
}

export default SingleNews;
