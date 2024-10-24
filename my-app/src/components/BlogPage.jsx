import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("🚀 ~ BlogPage ~ searchParams:", searchParams.get("search"));
  useEffect(() => {
    setSearchParams({ search: "dang" });
  }, []);
  return <div>blog page</div>;
};

export default BlogPage;
