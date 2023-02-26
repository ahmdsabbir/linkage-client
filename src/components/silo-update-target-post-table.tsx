/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SiloUpdateTargetPostTableRow from "./silo-update-target-post-table-row";

const SiloTargetPostTable = () => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      sourcePost: "bill",
      sourceUrl: "luo",
      targetPost: "1,2,3",
    },
  });
  const [oldData, setOldData] = useState([]);
  const [newData, setNewData] = useState([]);
  /* 
  const getFacts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };
 */
  const { data: posts } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data),
  });

  // useEffect(() => {
  //   setOldData(posts);
  // }, [oldData, posts]);

  // useEffect(() => {
  //   posts.map((item) => {
  //     setValue("targetPost", item?.id);
  //     setValue("sourcePost", item?.title);
  //     setValue("sourcePost", item?.body);
  //   });
  // }, [posts?.id, posts?.body, setValue, posts?.title, posts]);

  const onSubmit = (data, posts) => {
    console.log(data);
    setNewData(...posts);
  };

  return (
    <section className="container mx-auto px-4">
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <form onSubmit={handleSubmit(onSubmit)}>
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
                    {oldData.slice(0, 11)?.map((item, index) => (
                      <SiloUpdateTargetPostTableRow
                        key={item.id}
                        inputPost={register("sourcePost")}
                        inputUrl={register("sourceUrl")}
                        inputTarget={register("targetPost")}
                      />
                    ))}
                  </tbody>
                </table>
                <button className="btn-primary btn">Click</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiloTargetPostTable;

// https://codesandbox.io/s/9ltw0?file=/src/App.js:2314-2318
// https://stackoverflow.com/questions/69639177/handle-a-custom-component-using-react-hook-forms-and-react-table\
// https://dev.to/esponges/create-a-reusable-react-table-component-with-typescript-56d4
