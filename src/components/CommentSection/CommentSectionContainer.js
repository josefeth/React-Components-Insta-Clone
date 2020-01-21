// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);

  // const incrementPoints = () => {
  //   setPoints(points => points + 1);
  // };
console.log("commentsectionprops", props)
  return (
    <div>{/* map through the comments data and return the Comment component */
    props.postId.map}     
      <CommentInput ClassName="box" key={props.comments} post={props.post}/>)
      
    </div>
  );
};

export default CommentSection;
