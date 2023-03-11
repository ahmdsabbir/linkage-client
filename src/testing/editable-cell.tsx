/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Controller, useFormContext } from "react-hook-form";
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

  const { getValues, errors } = useFormContext();

  const defaultValue1 =
    getValues()["people"][0].pillar_targets === null
      ? (getValues()["people"][0].pillar_targets = "")
      : (getValues()["people"][0].pillar_targets = "");
  const defaultValue2 = getValues()["people"][index].support_targets;
  getValues()["people"][index].support_targets === null
    ? (getValues()["people"][index].support_targets = "")
    : (getValues()["people"][index].support_targets = "");
  // console.log(original);

  return (
    <>
      {original.pillar_title ? (
        <Controller
          name={`people[${0}].pillar_targets`}
          defaultValue={defaultValue1 ?? ""}
          // rules={{ required: { value: true, message: "field is required" } }}
          // control={control}
          render={({ field }) => <input {...field} />}
        />
      ) : (
        <Controller
          name={`people[${index}].support_targets`}
          defaultValue={defaultValue2 ?? ""}
          // rules={{ required: { value: true, message: "field is required" } }}
          // control={control}
          render={({ field }) => <input {...field} />}
        />
      )}

      {/* {errors?.people?.[index]?.firstName?.message} */}
    </>
  );
};

export default EditableCell;
