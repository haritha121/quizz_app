import mongoose from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  avatar: {
    type: Object,
    required: false,
    contains: {
      url: {
        type: String,
      },
      publicId: {
        type: String,
      },
    },
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});
const Users = mongoose.model("Users", UserSchema);
export default Users;
