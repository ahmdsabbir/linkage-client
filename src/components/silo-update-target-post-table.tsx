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
                  <tr>
                    <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-700 text-sm">
                      <div className="inline-flex items-center gap-x-3">
                        <div className="flex items-center gap-x-2">
                          <div>
                            <span className="font-normal text-gray-700 text-sm ">
                              https://example.com/source-1
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4 font-medium text-gray-700 text-sm">
                      <div className="inline-flex items-center gap-x-2 rounded-full  px-3 py-1 ">
                        <span className="font-normal text-gray-500 text-sm">
                          https://example.com/the-pillar
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4 font-medium text-gray-700 text-sm">
                      <div className="inline-flex items-center gap-x-2 rounded-full  px-3 py-1 ">
                        <span className="font-normal text-gray-500 text-sm">
                          1,2,3
                        </span>
                      </div>
                    </td>
                  </tr>
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
