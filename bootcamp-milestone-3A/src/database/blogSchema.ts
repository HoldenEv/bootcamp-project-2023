//import IBlog from "@/blogData";
import mongoose, { Schema } from "mongoose";

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// typescript type (can also be an interface)
type IBlog = {
  title: string;
  date: Date;
  description: string; // for preview
  image: string;
  slug: string;
  comments: IComment[]; // array for comments
};

// mongoose schema
const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: false },
  slug: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: false, default: new Date() },
    },
  ],
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);
export default Blog;
