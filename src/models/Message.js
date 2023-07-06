import { Schema, model, models } from "mongoose";
import { CONTACT_FORM_FIELDS } from "@/constants/contactFormFields";

const messageSchema = new Schema(
  {
    [CONTACT_FORM_FIELDS.name]: {
      type: String,
      required: true,
    },
    [CONTACT_FORM_FIELDS.email]: {
      type: String,
      required: true,
    },
    [CONTACT_FORM_FIELDS.message]: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = models.Message || model("Message", messageSchema);
export default Message;
