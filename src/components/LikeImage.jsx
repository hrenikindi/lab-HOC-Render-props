import React, { Component } from "react";
import LikesCount from "./LikesCount";

class LikeImage extends Component {
  render() {
    return (
      <LikesCount>
        {(likeImageCounts, incrementCount) => (
          <div>
            <button onClick={incrementCount}>
              Like Image {likeImageCounts}
            </button>
          </div>
        )}
      </LikesCount>
    );
  }
}

export default LikeImage;
