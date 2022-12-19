import React from "react";
import { globalData } from "./context/Provider";
import InputField from "./reusable-component/input-fields";
import ProjectDetails from "./reusable-component/project-details";

const ReleventTerm = () => {
  const { userData } = globalData();
  console.log(userData);

  return (
    <div>
      <ProjectDetails postTitle={userData.data?.postTitle} id={userData.id} />
      <InputField
        title={"Relevant Term"}
        action={"Generate Suggenstion"}
        placeholder={"relevent term..."}
        btnStyle={"bg-accent-light"}
      />
    </div>
  );
};

export default ReleventTerm;
