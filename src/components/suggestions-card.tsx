interface PropsSuggestionsCard {
  title: string;
  url: string;
}
const SuggestionsCard = ({ title, url }: PropsSuggestionsCard) => {
  return (
    <div className="max-w-xl overflow-hidden rounded border border-gray-100 bg-white text-gray-500 shadow-md shadow-slate-200">
      {/*  <!-- Body--> */}
      <div className="p-6">
        {/* <header className="mb-4">
          <h3 className="text-xl font-medium text-gray-700">Greek breakfast</h3>
          <p className=" text-gray-400"> $8.99</p>
        </header> */}
        <body className="flex flex-col space-y-5">
          {/* title */}
          <div>
            <p className="text-lg font-medium text-gray-700">Title</p>
            <p>{title}</p>
          </div>
          {/* url */}
          <div>
            <p className="text-lg font-medium text-gray-700">URL</p>
            <p>{url}</p>
          </div>
        </body>
      </div>
      {/*  <!-- Action base sized basic button --> */}
      <div className="flex p-6 pt-0">
        <button className="btn-primary btn">Choose</button>
      </div>
    </div>
  );
};

export default SuggestionsCard;
