import MovieModel from "../models/Movies.js";

const getAllDoc = async () => {
  try {
    const result = await MovieModel.find();
    console.log(result);
  } catch (error) {}
};

export default getAllDoc;
