import PillarPostCard from "../../components/pillar-post-card";
import SiloLinkingTable from "../../components/silo-linking-table";
import SiloTargetPostTable from "../../components/silo-update-target-post-table";
import SupportPostForm from "../../components/support-post-form";

const SiloProject = () => {
  return (
    <div>
      <PillarPostCard />

      {/* add new post url link for interlinking */}
      <SupportPostForm />
      {/* update target post id */}
      <SiloTargetPostTable />

      {/* link to the website */}
      <SiloLinkingTable />
    </div>
  );
};

export default SiloProject;
