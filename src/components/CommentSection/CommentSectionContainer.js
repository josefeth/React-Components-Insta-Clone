// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [data] = useState();

  // const incrementPoints = () => {
  //   setPoints(points => points + 1);
  // };

  return (
    <div>{/* map through the comments data and return the Comment component */}
      {CommentSection.map(comments =>
      console.log(comments) )}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
