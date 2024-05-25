import React from "react";
import LikesCount from "./LikesCount";

function LikeImage() {
  return (
    <LikesCount>
      {(likeImageCounts, incrementCount) => (
        <div>
          <button onClick={incrementCount}>Like Image {likeImageCounts}</button>
        </div>
      )}
    </LikesCount>
  );
}

export default LikeImage;
