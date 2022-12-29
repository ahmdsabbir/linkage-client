import React, { useEffect, useState } from "react";
import API from "../../../../api/api-config";
import SingleProjectCard from "../../../reusable-component/single-project-card";

const AllProjects = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await API.get("/posts");
      setPosts(response?.data);
    };
    getData();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {posts.map((post) => (
        <SingleProjectCard
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export default AllProjects;
