import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";

const jobSchema = mongoose.Schema(
  {
    documentName: String,
    number: String,
    avatar: String,
    avatarPublicId: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Doc = mongoose.model("Doc", jobSchema);
export default Doc;
