/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

import { useReactTable } from "@tanstack/react-table";

const Table = ({ columns, data, updateMyData, skipPageReset }) => {
  const formMethods = useForm({
    defaultValues: {
      people: data,
    },
    shouldUnregister: false,
  });

  const { fields, remove } = useFieldArray({
    control: formMethods.control,
    name: "people",
  });

  // For this example, we're using pagination to illustrate how to stop
  // the current page from resetting when our data changes
  // Otherwise, nothing is different here.
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useReactTable({
    columns,
    data: fields,
    // use the skipPageReset option to disable page resetting temporarily
    autoResetPage: !skipPageReset,
    // updateMyData isn't part of the API, but
    // anything we put into these options will
    // automatically be available on the instance.
    // That way we can call this function from our
    // cell renderer!
    updateMyData,
  });

  const onSubmit = (data) => {
    console.warn(data);
  };

  // Render the UI for your table
  return (
    <>
      <FormProvider {...formMethods}>
        <div> Render Count: {tableRenderCount}</div>
        <form noValidate onSubmit={formMethods.handleSubmit(onSubmit)}>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </>
  );
};

export default Table;
