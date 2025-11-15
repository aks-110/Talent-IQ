import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "Talent-IQ" });

// -------------------- Sync User --------------------
const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await connectDB();

    const { id, email_addresses, first_name, last_name, image_url } = event.data;

    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`.trim(),
      profileImage: image_url,
    };

    try {
      await User.create(newUser);
      console.log(`User synced successfully: ${id}`);
    } catch (error) {
      if (error.code === 11000) {
        console.log(`User already exists: ${id}`);
        await User.findOneAndUpdate({ clerkId: id }, newUser);
      } else {
        console.error(`Error syncing user ${id}:`, error);
        throw error;
      }
    }
  }
);

// -------------------- Delete User --------------------
const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user-from-db" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectDB();

    const { id } = event.data;

    try {
      const result = await User.deleteOne({ clerkId: id });

      if (result.deletedCount === 0) {
        console.log(`User not found in DB: ${id}`);
      } else {
        console.log(`User deleted successfully: ${id}`);
      }
    } catch (error) {
      console.error(`Error deleting user ${id}:`, error);
      throw error;
    }
  }
);

export const functions = [syncUser, deleteUserFromDB];
