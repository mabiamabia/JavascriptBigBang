import React, { Component } from "react";
import BlogHomePageCard from "./BlogCard";
import { isArrayEmpty as isMyArrayEmpty } from "./Utils";
import classes from "./App.module.css";

class App extends Component {
  state = {
    showBlogs: true,
  };

  blogArr = [
    {
      id: 1,
      title: "Blog Title 1",
      description:
        "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      likeCount: 0,
    },
    {
      id: 2,
      title: "Blog Title 2",
      description:
        "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      likeCount: 0,
    },
    {
      id: 3,
      title: "Blog Title 3",
      description:
        "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      likeCount: 0,
    },
  ];
  onLikeBtnClick = (pos) => {
    const updateBlogList = this.state.blogArr
    // const updateBlogObj = updateList[pos];

    // updateBlogObj.likeCount = updateBlogList.likeCount + 1;
    // updateBlogList[pos] = updateBlogObj;

    this.setState({blogArr: updateBlogList})

    // console.log(updateBlogObj);


  };

  blogCards = isArrayEmpty(this.state.blogArr)
    ? []
    : this.state.blogArr.map((item, pos) => {
        return (
          <BlogHomePageCard
            className={"Blog"}
            key={pos}
            title={item.title}
            description={item.description}
            likeCount={item.likeCount}
            id={item.id}
            onLikeBtnClick={this.onLikeBtnClick}
            position={pos}
          />
        );
      });

  onHideBtnClick = () => {
    this.setState((prevState, PrevProps) => {
      return { showBlogs: !prevState.showBlogs };
    });

    console.log(this.state.showBlogs);
  };

  onLikeBtnClick = () => {
    alert("Like Button Clicked");
  };

  render() {
    console.log('Render Called');
    console.log(this.state)
    return (
      <div className={classes.App}>
        <button className={classes.showHidenBtn} onClick={this.onHideBtnClick}>
          {this.state.showBlogs ? "Hide List" : "Show List"}
        </button>
        <br></br>
        {this.state.showBlogs ? blogCards : null}
      </div>
    );
  }
}

export default App;
