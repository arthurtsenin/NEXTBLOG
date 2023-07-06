import { Schema, model, models } from "mongoose";
import { AUTH_FORM_FIELDS } from "@/constants/authFormFields";

const userSchema = new Schema(
  {
    [AUTH_FORM_FIELDS.name]: {
      type: String,
      required: true,
    },
    [AUTH_FORM_FIELDS.email]: {
      type: String,
      unique: true,
      required: true,
    },
    [AUTH_FORM_FIELDS.password]: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);
export default User;
