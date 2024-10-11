import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/", {
      dbName: "Volunteering_Project",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((error) => {
      console.log("Some Error Occured While Connecting To Database: ", error);
    });
};
