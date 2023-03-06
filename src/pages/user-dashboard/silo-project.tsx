import { Outlet } from "react-router-dom";
import PillarPostCard2 from "../../components/pillar-post-card-2";

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
      <Outlet />
      {/*  <div>
        <SiloLinkingTableRow />
        <SiloProjectAddPostForm />
        <SiloTargetPostTableFormPage />
        <SiloLinkingTable />
      </div> */}
    </div>
  );
};

export default SiloProjectLayout;
