import MovieModel from "../models/Movies.js";

const creatDoc = async () => {
  try {
    const movie = new MovieModel({
      name: "film A",
      ratings: 4,
      isActive: true,
      genre: ["genre A", "genre B"],
      money: 12788888,
      comment: [{ value: "new comment", published: new Date() }],
    });

    const result = await movie.save();
    console.log(result);
  } catch (error) {}
};

export default creatDoc;
