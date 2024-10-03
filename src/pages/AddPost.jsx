import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-8 bg-[#1B264F]">
      {" "}
      {/* Set to dark background */}
      <Container>
        <h1 className="text-3xl font-bold text-center mb-6 text-[#F5F3F5]">
          {" "}
          {/* Change text color to white smoke */}
          Create a New Post
        </h1>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
