interface InputPropsFaces {
  type: string;
  placeholder: string;
  svg: JSX.Element;
}

const Input = ({ type, placeholder, svg }: InputPropsFaces) => {
  return (
    <div className="relative mt-6 flex items-center">
      {svg && svg}
      <input
        type={type}
        className="block w-full rounded border bg-white py-3 px-11 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
