import React from "react";
import { dumpLogs } from "./Utils";
// import "./BlogCard";
 

const BlogCard = (props) => {

  /*  onLikeBtnClick = () => {
      this.setState((prevState, PrevProps) => { 
      return {likeCount : prevState.likeCount + 1}
    })
  } */

  dumpLogs( props);

  return (
    <div className={classes.NewBlogCard}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <p>
        Like Count:
        <span className={classes.likeCount}>{props.likeCount}</span>
      </p>
      <button onClick={ () => props.onLikeBtnClick(props.position)}>Like</button>
    </div>
  );
};

export default BlogCard;
