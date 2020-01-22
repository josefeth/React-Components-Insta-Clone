// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

import dummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
  // const [comments, setComments] = useState(props.post.comments);
  const [comments] = useState(dummyData);

  // const incrementPoints = () => {
  //   setPoints(points => points + 1);
  // };
// console.log("commentsectionprops", props)
  return (
    // <div>{/* map through the comments data and return the Comment component */
    // props.postId.map}(props =>     
    //   <CommentInput ClassName="box" post={props.post}/>)
    //   )
    // </div>

    <div>
    {props.comments.map(p => (
      <Comment comment ={p} />
    ))}
    <CommentInput />
    </div>
  );
};

export default CommentSection;
