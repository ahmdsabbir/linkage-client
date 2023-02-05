import SuggestionsCard from "./suggestions-card";

const Suggestions = () => {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
      <div>
        <h2 className="my-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
          Suggestions
        </h2>
        <SuggestionsCard
          sourceTitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!"
          }
          sourceUrl={
            "https://www.google.com/search?q=tailwind+component+library&rlz=1C1UEAD_enBD1036BD1036&ei=OFzfY7bNOobiseMP8raRiAo&start=10&sa=N&ved=2ahUKEwi2ydCn7_38AhUGcWwGHXJbBKEQ8tMDegQIAhAE&biw=1920&bih=937&dpr=1"
          }
        />
      </div>
    </div>
  );
};

export default Suggestions;
