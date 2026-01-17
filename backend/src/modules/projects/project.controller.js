import Project from "./project.model.js";

export const createProject = async (req, res, next) => {
  try {
    const project = await Project.create({
      name: req.body.name,
      owner: req.user.id,
    });
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};
