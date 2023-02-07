import SingleProjectCard from "../../components/single-project-card";

const DashboardDetails = () => {
  return (
    <div>
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
  );
};

export default DashboardDetails;
