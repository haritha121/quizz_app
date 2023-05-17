import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_secret: CLOUDINARY_API_SECRET,
  api_key: CLOUDINARY_API_KEY,
});
export default cloudinary;
