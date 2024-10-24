import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPageDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  console.log("🚀 ~ BlogPageDetails ~ slug:", slug)
  return (
    <div className="flex flex-col justify-center items-center gap-y-2">
      <div>Blog page details</div>
      <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={()=> navigate("/blog")}>
        Navigate to Blog Page
      </button>
    </div>
  );
};

export default BlogPageDetails;
