import React from "react";

const SidebarSample = ({ children, isSidebar, setIsSidebar }) => {
  return (
    <main
      className={`absolute overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out 
${
  isSidebar
    ? " transition-opacity opacity-100 duration-500 -translate-x-0  "
    : " transition-all delay-500 opacity-0 -translate-x-full  "
}`}
    >
      <section
        className={`w-screen max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform 
  ${isSidebar ? " translate-x-0 " : " -translate-x-full"}
  `}
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="flex justify-between p-4 font-bold text-lg">
            <p>Header</p>
            <button className="btn" onClick={() => setIsSidebar(!isSidebar)}>
              close
            </button>
          </header>
          {children}
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsSidebar(false);
        }}
      ></section>
    </main>
  );
};

export default SidebarSample;
