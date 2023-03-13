/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Controller, useForm, useFormContext } from "react-hook-form";
const EditableCell = ({
  row: { index, original },
  // column: { id, accessor },
  // updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // // We need to keep and update the state of the cell normally
  // const [value, setValue] = React.useState(initialValue);

  // const onChange = (e) => {
  //   setValue(e.target.value);
  // };

  // // We'll only update the external data when the input is blurred
  // const onBlur = () => {
  //   updateMyData(index, id, value);
  // };
  // console.log(index, original);
  const { control } = useForm();
  const { getValues, errors } = useFormContext();

  const defaultValue1 =
    getValues()["people"][0].pillar_targets === null
      ? (getValues()["people"][0].pillar_targets = [])
      : (getValues()["people"][0].pillar_targets = []);
  const defaultValue2 = getValues()["people"][index].support_targets;
  getValues()["people"][index].support_targets === null
    ? (getValues()["people"][index].support_targets = [])
    : (getValues()["people"][index].support_targets = []);

  return (
    <>
      {original.pillar_title ? (
        <Controller
          name={`people[${index}].pillar_targets`}
          defaultValue={defaultValue1}
          // rules={{ required: { value: true, message: "field is required" } }}
          // rules={{ required: { value: true, message: "field is required" } }}
          // control={control}
          render={({ field }) => (
            <input
              className={`"block w-full rounded bg-primary/5 p-3  text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}
              {...field}
            />
          )}
        />
      ) : (
        <Controller
          name={`people[${index}].support_targets`}
          defaultValue={defaultValue2}
          // rules={{ required: { value: true, message: "field is required" } }}
          // control={control}
          render={({ field }) => (
            <input
              className={`"px-5"  block  w-full rounded bg-primary/5 p-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}
              {...field}
            />
          )}
        />
      )}

      {/* {errors?.people?.[index]?.firstName?.message} */}
    </>
  );
};

export default EditableCell;
