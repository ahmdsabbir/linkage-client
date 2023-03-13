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
const SiloTargetPostFormTable = ({ columns, data, updateData }) => {
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

    meta: {
      updateData: updateData,
    },
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
    // console.log(data);
    // splitting the input field strings and convert to  array
    console.log(data);
    const newData = await data.people?.map((item) => {
      console.log(item.pillar_targets);
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

    const crossMatchWith = newData.map((item, index, arr) => {
      if (arr[index].pillar_targets) {
        const checkitem = arr[index].support_targets;
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
    console.log(newData);
    console.log(crossMatchWith);

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
