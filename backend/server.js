const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "your-production-url" // Replace with your production URL
      : [
          "http://localhost:5173",
          "http://localhost:3000",
          "http://localhost:5000",
        ], // Add all possible development ports
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(cors(corsOptions)); // Use this instead of app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const dataSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    subscribe: {
      type: Boolean,
      default: true,
    },
  },
  { collection: "User" }
);

// Force the unique index
dataSchema.index({ email: 1 }, { unique: true });

const Data = mongoose.model("Data", dataSchema);

// Get all data
app.get("/data", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add new data
app.post("/data", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Add email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    // Check if email already exists
    const existingEmail = await Data.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: "Email already subscribed" });
    }

    // If email doesn't exist, save it
    const newData = new Data(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Add new email subscription
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Add email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    // First check if email exists
    const existingEmail = await Data.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: "Email already subscribed" });
    }

    // If email doesn't exist, save it
    const newEmail = new Data({ email, subscribe: true });
    await newEmail.save();
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error("Error saving email:", error);
    // Still keep the duplicate key error check as a backup
    if (error.code === 11000) {
      return res.status(409).json({ message: "Email already subscribed" });
    }
    res.status(500).json({ message: "Server error" });
  }
});

// Add this test endpoint
app.get("/test", (req, res) => {
  res.json({ message: "Server is working" });
});

// Start the server || yas it works I'm not sure why HUHUHUHUHUHUUHU
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
