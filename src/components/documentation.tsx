const TestingCard = () => {
  return (
    <div className="max-w-2xl overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
      <img
        className="h-64 w-full object-cover"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />
      <div className="p-6">
        <div>
          <span className="text-xs font-medium uppercase text-blue-600 dark:text-blue-400">
            Documentation
          </span>
          <a
            href="http://localhost:3000/"
            className="mt-2 block transform text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-gray-600 hover:underline dark:text-white"
            tabIndex={0}
            // role="link"
          >
            I&apos;m building a Ai based interlinking
          </a>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
            egestas quam volutpat viverra. In pretium nec senectus erat. Et
            malesuada lobortis.
          </p>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="h-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
              />
              <a
                href="http://localhost:3000/"
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                tabIndex={0}
                // role="link"
              >
                Jone Doe
              </a>
            </div>
            <span className=" mx-1 text-xs text-gray-600 dark:text-gray-300">
              21 SEP 2015
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingCard;
