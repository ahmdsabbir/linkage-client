import SingleProjectCard from "../../components/single-project-card";

const AllProjects = () => {
  return (
    <>
      <p className="text-9xl text-gray-800"> All Projects list</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10">
        <SingleProjectCard
          projectName={"InterLink"}
          projectURL={
            "https://www.figma.com/file/QckhWKiLf1qDHlS5QItYiZ/Interlink?node-id=383%3A3121&t=HEm22xkppTvRWgtb-0"
          }
          projectUserName={"Jo Doe"}
          projectAdminPassword={"51654dsfgvdsg"}
          projectCreatedDate={"2023/07/02"}
        />
      </div>
    </>
  );
};

export default AllProjects;
