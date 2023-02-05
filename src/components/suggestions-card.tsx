const SuggestionsCard = () => {
  return (
    <div className="max-w-xl overflow-hidden rounded border border-gray-100 bg-white text-gray-500 shadow-md shadow-slate-200">
      {/*  <!-- Body--> */}
      <div className="p-6">
        <header className="mb-4">
          <h3 className="text-xl font-medium text-gray-700">Greek breakfast</h3>
          <p className=" text-gray-400"> $8.99</p>
        </header>
        <p>
          Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries +
          Granola + Honey.
        </p>
      </div>
      {/*  <!-- Action base sized basic button --> */}
      <div className="flex p-6 pt-0">
        <button className="btn-primary btn">
          <span>Choose</span>
        </button>
      </div>
    </div>
  );
};

export default SuggestionsCard;
