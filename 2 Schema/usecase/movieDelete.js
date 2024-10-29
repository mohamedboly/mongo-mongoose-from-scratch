import MovieModel from "../models/Movies.js";

const deleteById = async () => {
  try {
    const result = await MovieModel.findByIdAndDelete(
      "67211d54cbba1b7e1d31d9d8"
    );

    console.log("result");
    console.log(result);
  } catch (error) {}
};

export default deleteById;
