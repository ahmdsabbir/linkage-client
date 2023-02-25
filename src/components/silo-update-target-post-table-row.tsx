const SiloUpdateTargetPostTableRow = ({ inputPost, inputUrl, inputTarget }) => {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-700 text-sm">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <div>
              <input {...(inputPost ?? {})} disabled />
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4 font-medium text-gray-700 text-sm">
        <div className="inline-flex items-center gap-x-2 rounded-full  px-3 py-1 ">
          <input {...(inputUrl ?? {})} disabled />
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4 font-medium text-gray-700 text-sm">
        <input {...(inputTarget ?? {})} />
      </td>
    </tr>
  );
};

export default SiloUpdateTargetPostTableRow;
