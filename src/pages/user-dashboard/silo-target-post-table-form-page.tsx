import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";

import SiloTargetPostFormTable from "../../components/silo-update-target-post-form-table";
import EditableCell from "../../testing/editable-cell";
import { useSiloTableFormQuery } from "../../utils/silo-query";

type Pillars = {
  pillar_id?: number;
  support_id?: number;
  pillar_title?: string;
  support_title?: string;
  pillar_url?: string;
  support_url?: string;
  target_post: number | string;
};
const SiloTargetPostTableFormPage = () => {
  const [mergeData, setMergeData] = useState({});
  const [myData, setMyData] = useState([]);

  const { data: tableData, isLoading, isFetching } = useSiloTableFormQuery();
  useEffect(() => {
    setMergeData(tableData);

    if (
      Object.keys(mergeData ?? {}).length === 0 &&
      (mergeData ?? {}).constructor === Object
    ) {
      return;
    } else {
      const { pillar, ...rest } = mergeData;
      const finalData = [...rest.supports];
      const newData = [pillar, ...finalData];

      setMyData(newData);
    }
  }, [mergeData, tableData]);

  const columnHelper = createColumnHelper<Pillars>();

  const columns = [
    /* columnHelper.accessor(`${"pillar_id" ?? "support_id "}`, {
      header: () => <span>Id</span>,
      // footer: (props) => props.column.id,
      // cell: (info) => console.log(info),
    }), */
    columnHelper.accessor((row) => row.pillar_id ?? row.support_id, {
      id: (info) => {
        console.log(info);
        return `${"row.pillar_id " ?? "row.support_id"}`;
      },

      cell: (info) => info.getValue(),
      header: () => <span>Id</span>,
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

    columnHelper.accessor("target_post", {
      id: "target_post",
      header: () => (
        <div className="flex items-center gap-x-3">
          <span>Target post</span>
        </div>
      ),
      cell: <EditableCell />,

      footer: (info) => info.column.id,
    }),
  ];

  return (
    <div>
      {/* update target post id */}
      <h1 className="font-bold text-gray-700 text-5xl">table form page</h1>

      {isLoading || isFetching ? (
        <h1 className="font-bold text-5xl">Loading...</h1>
      ) : (
        <SiloTargetPostFormTable columns={columns} data={myData} />
      )}
    </div>
  );
};

export default SiloTargetPostTableFormPage;
