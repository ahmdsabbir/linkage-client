/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import EditableCell from "../../components/editable-cell";
import SiloTargetPostFormTable from "../../components/silo-update-target-post-form-table";

import { useSiloTableFormQuery } from "../../utils/silo-query";

type Pillars = {
  pillar_id?: number;
  support_id?: number;
  pillar_title?: string;
  support_title?: string;
  pillar_url?: string;
  support_url?: string;
  target_post: number | string;
  pillar_targets: number | string;
};
const SiloTargetPostTableFormPage = () => {
  const { data: tableData, isLoading, isFetching } = useSiloTableFormQuery();

  /*   useEffect(() => {
    const { pillar, supports } = mergeData;
    const newData = [pillar, ...supports];

    setMyData(newData);
  }, [mergeData]); */

  /* const updateData = (rowIndex, columnId, value) => {
    console.log(prev);
    setMyData((prev) =>
      prev.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...prev[rowIndex]!,
            [columnId]: value,
          };
        }
        return row;
      })
    );
  }; */

  const columnHelper = createColumnHelper<Pillars>();

  const columns = useMemo(
    () => [
      columnHelper.accessor((row) => row.pillar_id ?? row.support_id, {
        id: `${"row.pillar_id " ?? "row.support_id"}`,

        cell: (info) => (info.row.index === 0 ? "Pillar" : info.row.index),
        header: () => <span>No</span>,
        footer: (props) => props.column.id,
      }),

      columnHelper.accessor((row) => row.pillar_url ?? row.support_url, {
        id: `${"row.pillar_url" ?? "row.support_url"}`,

        cell: (info) => info.getValue(),
        header: () => <span>Source Url</span>,
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor((row) => row.pillar_title ?? row.support_title, {
        id: `${"row.pillar_title" ?? "row.support_title"}`,

        cell: (info) => info.getValue(),
        header: () => <span>Source Title</span>,
        footer: (props) => props.column.id,
      }),

      columnHelper.accessor("pillar_targets", {
        id: "pillar_targets",
        header: () => (
          <div className="flex items-center gap-x-3">
            <span>Target post</span>
          </div>
        ),
        // cell: (prop) => console.log(prop),
        cell: (prop) => <EditableCell row={prop.row} />,

        footer: (info) => info.column.id,
      }),
    ],
    []
  );

  return (
    <div>
      {/* update target post id */}
      <h1 className="font-bold text-gray-700 text-5xl">table form page</h1>

      {isLoading || isFetching ? (
        <h1 className="font-bold text-5xl">Loading...</h1>
      ) : (
        <SiloTargetPostFormTable
          columns={columns}
          data={tableData}
          // updateData={updateData}
        />
      )}
    </div>
  );
};

export default SiloTargetPostTableFormPage;
