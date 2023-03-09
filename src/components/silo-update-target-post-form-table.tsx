/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

// const defaultData: Pillars[] = [
//   {
//     id: 1,
//     firstName: "https://example.com/pillar",
//     lastName: "The Pillar Post Title",
//     progress: 50,
//   },
//   { id: 2, firstName: "tandy", lastName: "miller", progress: 80 },
//   {
//     id: 3,
//     firstName: "joe",
//     lastName: "dirte",

//     progress: 10,
//   },
// ];
const SiloTargetPostFormTable = ({ columns, data }) => {
  // const navigate = useNavigate();

  // const [data, setData] = useState(() => [...defaultData]);
  // const columnHelper = createColumnHelper<Pillars>();
  // console.log(data);
  /*  const [state, setState] = useState();
  useEffect(() => {
    setState(data);
  }, [data]);
 */
  const formMethods = useForm({
    defaultValues: {
      people: data,
    },
    shouldUnregister: false,
  });
  // set the value of api data
  useEffect(() => {
    if (data) {
      formMethods.setValue("people", data);
    }
  }, [data, formMethods]);

  const { fields, remove } = useFieldArray({
    control: formMethods.control,
    name: "people",
  });

  const table = useReactTable({
    data: fields,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const onSubmit = async (data) => {
    console.log(data);
    // console.log(data.people.map((item) => item.progress));
    // navigate("/dashboard/silo/add-support-post-linking-table");
  };
  // console.log(fields);

  return (
    <section className="container mx-auto px-4">
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-primary/20  shadow shadow-primary/5 md:rounded-lg">
              <FormProvider {...formMethods}>
                <form noValidate onSubmit={formMethods.handleSubmit(onSubmit)}>
                  <table className="min-w-full divide-y divide-dodger-blue-100  ">
                    <thead className="bg-primary/10 font-medium text-gray-700 text-lg">
                      {table?.getHeaderGroups()?.map((headerGroup) => (
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
                    <tbody className="divide-y divide-dodger-blue-100 bg-white ">
                      {table?.getRowModel().rows?.map((row) => (
                        <tr key={row.id}>
                          {row.getVisibleCells().map((cell) => (
                            <td
                              key={cell.id}
                              className="whitespace-nowrap px-4 py-4 font-medium text-gray-700 text-sm"
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

                      <tr>
                        <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-700 text-sm">
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

export default SiloTargetPostFormTable;

// https://codesandbox.io/s/9ltw0?file=/src/App.js:2314-2318
// https://stackoverflow.com/questions/69639177/handle-a-custom-component-using-react-hook-forms-and-react-table\
// https://dev.to/esponges/create-a-reusable-react-table-component-with-typescript-56d4

// silo/targets/
