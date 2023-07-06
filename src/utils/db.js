import mongoose from "mongoose";

const connect = async () => {
  mongoose.set("strictQuery", true);

  try {
    mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
