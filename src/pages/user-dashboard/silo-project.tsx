import PillarPostCard2 from "../../components/pillar-post-card-2";
import SiloLinkingTable from "../../components/silo-linking-table";
import SiloTargetPostTable from "../../components/silo-update-target-post-table";
import SupportPostForm from "../../components/support-post-form";

const SiloProjectLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-1 justify-center gap-4 px-6 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:gap-8 xl:grid-cols-4 xl:gap-10">
        {/* <PillarPostCard /> */}
        <PillarPostCard2 />
        <PillarPostCard2 />
        <PillarPostCard2 />
        {/* <PillarPostCard2 /> */}
      </div>

      {/* add new post url link for interlinking */}
      <SupportPostForm />
      {/* update target post id */}
      <SiloTargetPostTable />

      {/* link to the website */}
      <SiloLinkingTable />
    </div>
  );
};

export default SiloProjectLayout;
