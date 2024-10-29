import MovieModel from "../models/Movies.js";

const updateById = async () => {
  try {
    const result = await MovieModel.updateOne(
      { _id: "67211d54cbba1b7e1d31d9d8" },
      { name: "New Name" }
    );

    console.log("result");
    console.log(result);
  } catch (error) {}
};

export default updateById;
