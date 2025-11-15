import { chatClient } from "../lib/stream.js";
export async function getStreamToken(req, res) {
  try {
    // use clerk ID to generate Stream token not mongo db id
    const token = chatClient.createToken(req.user.clerkId);
    res.status(200).json({
      token,
      userId: req.user.clerkId,
      userName: req.user.name,
      userImage: req.user.image,
    });
  } catch (error) {
    console.log("Error generating Stream token", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
