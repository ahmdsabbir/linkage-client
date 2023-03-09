/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Controller, useFormContext } from "react-hook-form";
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id, accessor },
  updateMyData, // This is a custom function that we supplied to our table instance
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

  const { getValues, errors } = useFormContext();

  const defaultValue = getValues()["people"][index].firstName;
  return (
    <>
      <Controller
        name={`people[${index}].firstName`}
        defaultValue={defaultValue}
        rules={{ required: { value: true, message: "field is required" } }}
        // control={control}
        render={({ field }) => <input {...field} />}
      />
      {errors?.people?.[index]?.firstName?.message}
    </>
  );
};

export default EditableCell;