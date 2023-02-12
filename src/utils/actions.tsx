// projects added
export const projectsAdded = (projects) => ({
  type: "projects",
  payload: { projects },
});

// projects delete
export const projectDeleted = (projectId) => ({
  type: "projectDelete",
  payload: projectId,
});

// projects Select
export const selectedProject = (selectedProject) => ({
  type: "selectedProject",
  payload: { selectedProject },
});
