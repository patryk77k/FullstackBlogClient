import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=1390&crop=1" />
      </div>
      <div className="texts">
        <h2>EcoFlow teases full-house battery backup coming later this year</h2>
        <p className="info">
          <a className="author">Patryk Kardach</a>
          <time>2023-04-13 21:22</time>
        </p>
        <p className="summary">
          Today at its special launch event, home backup power giant EcoFlow
          launched a flurry of new products, including a “Whole-Home Backup
          Power Solution.
        </p>
      </div>
    </div>
  );
};

export default Post;
