import axios from "axios";
import React, { useState } from "react";

const AddPost = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const user = localStorage.getItem("user");
  const handlechangepost = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handlesubmitpost = (e) => {
    e.preventDefault();
    const { token } = JSON.parse(user);
    const data = {
      ...post,
      status: "publish",
    };
    axios
      .post(`${process.env.REACT_APP_API_ROOT}/posts`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
    console.log("post", post);
    // Add your logic to submit the post here
  };

  return (
    <div className="w-[100%] mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Add New Post</h2>
      <form onSubmit={handlesubmitpost} className="space-y-10 ">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-gray-600"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            onChange={handlechangepost}
            name="title"
            value={post.title}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-gray-600"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-semibold text-gray-600"
          >
            Content:
          </label>
          <textarea
            id="content"
            onChange={handlechangepost}
            name="content"
            value={post.content}
            className="w-full p-2 border border-gray-300 rounded-md text-gray-600"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
