import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: { type: mongoose.Decimal128, required: true, validate: (v) => v > 20 },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now() } },
  ],
});

const MovieModel = mongoose.model("Movie", MovieSchema);

export default MovieModel;



