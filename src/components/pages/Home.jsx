import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ROOT}/posts`)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .then((posts) => {
        console.log(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <p className="text-3xl font-bold underline ">
        {posts &&
          posts.map((post) => {
            return (
              <Link to={`/addpost/${post.id}`}>
                {post.id} {post.title.rendered}
              </Link>
            );
          })}
      </p>
    </div>
  );
};

export default Home;
