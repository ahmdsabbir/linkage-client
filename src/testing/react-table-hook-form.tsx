/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import EditableCell from "./editable-cell";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const ReactTableHookForm = () => {
  const [data, setData] = useState(() => [...defaultData]);

  const columnHelper = createColumnHelper<Person>();

  const columns = [
    columnHelper.accessor("firstName", {
      // cell: (info) => info.getValue(),
      cell: EditableCell,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("age", {
      header: () => "Age",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("visits", {
      header: () => <span>Visits</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("progress", {
      header: "Profile Progress",
      footer: (info) => info.column.id,
    }),
  ];

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

  const table = useReactTable({
    data: fields,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const onSubmit = (data) => {
    console.warn(data);
  };

  return (
    <div className="p-2 text-gray-700">
      <FormProvider {...formMethods}>
        <form noValidate onSubmit={formMethods.handleSubmit(onSubmit)}>
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
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
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn-primary btn" type="submit">
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ReactTableHookForm;

// https://codesandbox.io/s/9ltw0?file=/src/App.js:2314-2318
// https://stackoverflow.com/questions/69639177/handle-a-custom-component-using-react-hook-forms-and-react-table\
// https://dev.to/esponges/create-a-reusable-react-table-component-with-typescript-56d4
