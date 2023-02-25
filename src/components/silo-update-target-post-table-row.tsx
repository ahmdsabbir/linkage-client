const SiloUpdateTargetPostTableRow = () => {
  return (
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
          <span className="font-normal text-gray-500 text-sm">1,2,3</span>
        </div>
      </td>
    </tr>
  );
};

export default SiloUpdateTargetPostTableRow;
