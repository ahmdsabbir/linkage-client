import { Link, Outlet } from "react-router-dom";
import PillarPostCard2 from "../../components/pillar-post-card-2";
import { useSiloQuery } from "../../utils/silo-query";

const SiloProjectLayout = () => {
  const { data, isLoading, isFetching } = useSiloQuery();

  return (
    <>
      {isLoading || isFetching ? (
        <div className="font-bold text-5xl"> Loading...</div>
      ) : (
        <div>
          {/* create new silo project */}
          <div className="  flex flex-col ">
            <Link
              to={"/dashboard/silo/add-support-post-form"}
              className="btn-accent btn  gap-2 self-end"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span>Create</span>
            </Link>
          </div>
          {/* silo project cards */}
          <div className="grid grid-cols-1 justify-center gap-4 px-6 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:gap-8 xl:grid-cols-4 xl:gap-10">
            {data.pillars.map((pillar) => (
              <PillarPostCard2 key={pillar.pillar_id} pillar={pillar} />
            ))}
          </div>

          <Outlet />
          {/*  <div>
        <SiloLinkingTableRow />
        <SiloProjectAddPostForm />
        <SiloTargetPostTableFormPage />
        <SiloLinkingTable />
      </div> */}
        </div>
      )}
    </>
  );
};

export default SiloProjectLayout;
