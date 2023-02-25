import SiloUpdateTargetPostTableRow from "./silo-update-target-post-table-row";

const SiloTargetPostTable = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 font-medium text-gray-700 text-lg">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-left  rtl:text-right"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Source Post Url</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-left    rtl:text-right "
                    >
                      <span>Source Post Title</span>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left  rtl:text-right "
                    >
                      <span>Target Post</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white ">
                  <SiloUpdateTargetPostTableRow />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiloTargetPostTable;
