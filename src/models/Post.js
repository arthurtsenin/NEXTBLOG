import { Schema, model, models } from "mongoose";
import { FORM_FIELDS } from "@/constants/formFields";

const postSchema = new Schema(
  {
    [FORM_FIELDS.title]: {
      type: String,
      required: true,
    },
    [FORM_FIELDS.description]: {
      type: String,
      required: true,
    },
    [FORM_FIELDS.image]: {
      type: String,
      required: true,
    },
    [FORM_FIELDS.content]: {
      type: String,
      required: true,
    },
    [FORM_FIELDS.username]: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", postSchema);
export default Post;
