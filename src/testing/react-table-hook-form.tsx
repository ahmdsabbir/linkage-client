/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { HTMLProps, useEffect, useRef, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import EditableCell from "./editable-cell";

function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
}

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
  id: string;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    id: "tanner",
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    id: "tandy",
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    id: "joe",
  },
];

const ReactTableHookForm = () => {
  const [data, setData] = useState(() => [...defaultData]);
  const [rowSelection, setRowSelection] = useState({});
  const columnHelper = createColumnHelper<Person>();

  const columns = [
    columnHelper.accessor("select", {
      header: ({ table }) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      // cell: (info) => info.getValue(),
      cell: ({ row }) => (
        <div className="px-1">
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
    }),
    columnHelper.accessor("firstName", {
      header: () => (
        <div className="flex items-center gap-x-3">
          <span>First Name</span>
        </div>
      ),
      // cell: (info) => info.getValue(),
      cell: EditableCell,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      header: () => (
        <div className="flex items-center gap-x-3">
          <span>Last Name</span>
        </div>
      ),
      cell: (info) => <i>{info.getValue()}</i>,
    }),
    columnHelper.accessor("age", {
      header: () => (
        <div className="flex items-center gap-x-3">
          <span>Age</span>
        </div>
      ),
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("visits", {
      header: () => (
        <div className="flex items-center gap-x-3">
          <span>Visits</span>
        </div>
      ),

      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("status", {
      header: () => (
        <div className="flex items-center gap-x-3">
          <span>Status</span>
        </div>
      ),

      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("progress", {
      header: () => (
        <div className="flex items-center gap-x-3">
          <span>Profile Progress</span>
        </div>
      ),

      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("action", {
      /* cell: (original) => (
        <button
          className="btn-accent btn"
          value={original.name}
          onClick={() => console.log("button data", original)}
        >
          Hello
        </button>
      ), */
      cell: ({ cell }) => (
        <button
          className="btn-accent btn"
          // value={cell.row.values.name}
          onClick={() => console.log("button data", cell.row.original)}
        >
          Link
        </button>
      ),

      footer: (info) => info.column.id,
    }),
  ];

  const formMethods = useForm({
    defaultValues: {
      people: data,
    },
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    shouldUnregister: false,
  });

  const { fields, remove } = useFieldArray({
    control: formMethods.control,
    name: "people",
  });

  const table = useReactTable({
    data: fields,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  const onSubmit = (data) => {
    console.warn(data);
  };

  return (
    <section className="container mx-auto px-4">
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <FormProvider {...formMethods}>
                <form noValidate onSubmit={formMethods.handleSubmit(onSubmit)}>
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="  flex-col bg-gray-50  font-medium text-gray-700 text-lg">
                      {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                          {headerGroup.headers.map((header) => (
                            <th
                              key={header.id}
                              scope="col"
                              className="py-3.5 px-4 text-left  rtl:text-right"
                            >
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white ">
                      {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                          {row.getVisibleCells().map((cell) => (
                            <td
                              key={cell.id}
                              className="  whitespace-nowrap px-4 py-4 font-medium text-gray-700 text-sm"
                              data-title={cell.column.id}
                            >
                              <div className="inline-flex items-center gap-x-3">
                                <div className="flex items-center gap-x-2">
                                  <div>
                                    {flexRender(
                                      cell.column.columnDef.cell,
                                      cell.getContext()
                                    )}
                                  </div>
                                </div>
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}

                      <tr className="flex items-center justify-center  text-center">
                        <td className="whitespace-nowrap  px-4 py-4 text-center font-medium text-gray-700 text-sm">
                          <button className="btn-primary btn" type="submit">
                            Submit
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReactTableHookForm;

// https://codesandbox.io/s/9ltw0?file=/src/App.js:2314-2318
// https://stackoverflow.com/questions/69639177/handle-a-custom-component-using-react-hook-forms-and-react-table\
// https://dev.to/esponges/create-a-reusable-react-table-component-with-typescript-56d4
