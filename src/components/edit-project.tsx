import Input from "./input";

const EditProject = () => {
  return (
    <section>
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <form className="w-full max-w-md">
          <h1 className="mt-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
            Edit your Project
          </h1>
          <Input
            id="projectTitle"
            label="Project Title"
            type={"text"}
            placeholder={"Project Title"}
            infoText={"aka, Project Title"}
            tooltipText={"aka, Project Title"}
          />
          <Input
            id="domain"
            label="Domain URL"
            type={"text"}
            placeholder={"Domain URL"}
          />
          <Input
            id="wp username"
            label="WP Username"
            type={"text"}
            placeholder={"wp username"}
          />

          <Input
            id="Wp App. Password"
            label="Wp App. Password"
            type={"Password"}
            placeholder={"Wp App. Password"}
          />
          <Input
            id="projectCreatedDate"
            label="Project Created At"
            type={"text"}
            placeholder={"Project created at"}
            isDisabled={true}
          />

          <div className="mt-4">
            <button className="btn-primary btn">Create Project</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProject;
