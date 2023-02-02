const Test = () => {
  const fruits = ["apple", "banana", "orange"];

  const typeChecking = (a: number, b: number) => {
    return a * b;
  };

  return (
    <div className="text-base font-extrabold sm:text-5xl md:text-7xl xl:text-9xl">
      {fruits.map((item, i) => (
        <p key={i}> {item} </p>
      ))}
    </div>
  );
};

export default Test;
