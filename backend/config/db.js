import { connect, disconnect } from "mongoose";
import { projects, clients } from "../sampleData.js";
import Project from "../models/Project.js";
import Client from "../models/Client.js";

const connectDB = async () => {
  const conn = await connect(process.env.MONGO_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export const addToDb = async () => {
  try {
    // Check if projects collection is empty
    // const projectCount = await Project.countDocuments();
    // if (projectCount === 0) {
    //   // Insert projects data if collection is empty
    //   await Project.insertMany(projects);
    //   console.log("Projects data inserted successfully");
    // } else {
    //   console.log("Projects data already exists");
    // }

    // Check if clients collection is empty
    const clientCount = await Client.countDocuments();
    if (clientCount === 0) {
      // Insert clients data if collection is empty
      await Client.insertMany(clients);
      console.log("Clients data inserted successfully");
    } else {
      console.log("Clients data already exists");
    }
  } catch (err) {
    console.error("Error inserting data:", err);
  } finally {
    disconnect();
  }
};

export default connectDB;
