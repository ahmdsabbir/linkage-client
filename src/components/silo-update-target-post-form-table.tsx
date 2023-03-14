/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import {
  useMutateSiloTableFormNextQuery,
  useMutateSiloTableFormQuery,
} from "../utils/silo-query";

const SiloTargetPostFormTable = ({ columns, data }) => {
  const [myData, setMyData] = useState([]);
  // set state of pillar content Id and project name
  const [pillarIdProjectName, setPillarIdProjectName] = useState({
    pillar_id: "",
    project_name: "",
  });

  // submit table data form query
  const { mutateAsync: nextAsync, isLoading: nextisLoading } =
    useMutateSiloTableFormNextQuery();
  const { mutateAsync, isLoading } = useMutateSiloTableFormQuery(
    nextAsync,
    pillarIdProjectName
  );

  // const navigate = useNavigate();

  const formMethods = useForm({
    defaultValues: {
      people: [data?.pillar, ...data?.supports],
    },
    shouldUnregister: false,
  });

  const { fields, remove } = useFieldArray({
    control: formMethods.control,
    name: "people",
  });

  useEffect(() => setMyData(fields), [fields]);

  const table = useReactTable({
    data: myData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
  });

  const onSubmit = async (data) => {
    // splitting the input field strings and convert to  array

    /**  
    bug to fix 
    --> split not found
    */
    const newData = await data.people?.map((item) => {
      if (item.pillar_targets) {
        return { ...item, pillar_targets: item.pillar_targets.split(",") };
      } else if (item.support_targets.length > 0) {
        return {
          ...item,
          support_targets: item.support_targets.split(","),
          targets: [],
        };
      } else {
        return;
      }
    });

    // matching the index  with every objects array

    const crossMatchWith = await newData.map((item, index, arr) => {
      if (arr[index].pillar_targets) {
        const checkitem = arr[index].targets;
        for (const indexItem of arr[index].pillar_targets) {
          checkitem.push(arr[indexItem].support_id);
        }
      } else {
        const checkitemsprt = arr[index].targets;
        for (const indexItem of arr[index].support_targets) {
          checkitemsprt.push(arr[indexItem].support_id);
        }
      }
      return item;
    });
    const finalData = crossMatchWith.map((item) => {
      if (item.pillar_id) {
        return { id: item.pillar_id, targets: item.targets.toString() };
      } else {
        return { id: item.support_id, targets: item.targets.toString() };
      }
    });
    const [pillar, ...rest] = finalData;
    const submitData = {
      pillar: pillar,
      supports: [...rest],
    };
    setPillarIdProjectName((prev) => ({
      ...prev,
      pillar_id: pillar.id,
      project_name: "AnikYusuf",
    }));
    await mutateAsync(submitData);

    // navigate("/dashboard/silo/add-support-post-linking-table");
  };

  return (
    <section className="container mx-auto px-4">
      <div className="font-extrabold text-9xl">testing</div>
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
                            {/* {isLoading ? "Loading..." : "Submit"} */} submit
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

/* 

==========================================
post data format testing for sending to the server
===================================================

  const data = [
    {pillarId: 10, pillarTarget: 1, pillarSupport : "" },
    {supportId: 10, supportTarget: "1,2,3"}
]


const newData = data.map((item, index, arr) => {
  const getIndex =  arr[item.pillarTarget];
    if(getIndex) {
        console.log(getIndex)
   console.log(getIndex.supportId)
         return {...item , pillarSupport:  getIndex.supportId}
    }

        else {
            return item
        }
  
    
})


console.log(newData)

*/

/* test result of finding id from array */
/* const data =  [
  {pillar_id: 4, pillar_targets: ['1','2','3'], pillar_title: 'Roomba Classic', pillar_url: 'https://anikyusuf.com/roomba-classic/', support_targets: []},
  
  {support_id: 10, support_targets: ['2','3'], support_title: 'Trash Post', support_url: 'https://anikyusuf.com/trash-post/', targets:[]},
  
  {support_id: 11, support_targets: ['1','3'], support_title: 'Why you must buy a roomba', support_url: 'https://anikyusuf.com/why-you-must-buy-a-roomba/', targets:[]},
  
  {support_id: 12, support_targets: ['1','2'], support_title: 'gutenberg test', support_url: 'https://anikyusuf.com/gutenberg-test/',  targets:[]}
  ]
  
  const newData = data.map((item, index, arr) => {
  if(arr[index].pillar_targets){
    let checkitem =   arr[index].support_targets
      for(let indexItem of arr[index].pillar_targets) {
        
         checkitem.push(arr[indexItem].support_id)
      }
  }
      else {
          let checkitemsprt = arr[index].targets;
          for(let indexItem of arr[index].support_targets) {
         
          checkitemsprt.push(arr[indexItem].support_id)
          }
          
      }
      return item;
  })
  console.log(newData);
   */
