import React, { Component } from "react";
import LikesCount from "./LikesCount";

class LikePost extends Component {
  render() {
    return (
      <LikesCount>
        {(likePostCounts, incrementCount) => (
          <div>
            <button onClick={incrementCount}>Like Post {likePostCounts}</button>
          </div>
        )}
      </LikesCount>
    );
  }
}

export default LikePost;
