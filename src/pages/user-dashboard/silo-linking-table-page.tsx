import { useMemo } from "react";
import SiloLinkingTable from "../../components/silo-linking-table";
import { useLinkingTableQuery } from "../../utils/silo-query";

const SiloLinkingTablePage = () => {
  const { data, isLoading, isFetching } = useLinkingTableQuery();

  const columns = useMemo(
    () => [
      {
        accessorKey: "source_title",
        header: () => <span>Source Post</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "target_title",
        header: () => <span>Target Post</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "status",
        header: () => <span>Status</span>,
        cell: (prop) => {
          return prop.getValue() ? (
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
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
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
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          );
        },
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "anchor",
        header: () => <span>Anchor</span>,

        footer: (props) => props.column.id,
      },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ cell }) => (
          <div className="flex items-center gap-x-6">
            <button
              className=" hover:text-bold inline-flex items-center  justify-center space-x-1 rounded border border-primary/25 p-1 font-medium text-primary text-sm hover:bg-primary/10"
              onClick={(e) => {
                e.preventDefault();
                console.log("button data", cell.row.original);
              }}
            >
              <p>Link it</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4 rotate-[-39deg]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </button>
          </div>
        ),
        // footer: (props) => props.column.id,
      },
    ],
    []
  );
  return (
    <div>
      {isLoading || isFetching ? (
        <div className="font-extrabold text-5xl">Loading</div>
      ) : (
        <SiloLinkingTable columns={columns} data={data?.links} />
      )}
    </div>
  );
};

export default SiloLinkingTablePage;
