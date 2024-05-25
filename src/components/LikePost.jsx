import React from "react";
import LikesCount from "./LikesCount";

function LikePost() {
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

export default LikePost;
