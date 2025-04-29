import express from "express";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js"; 
import connectToDatabase from "./database/mongodb.js"

const app = express(); // Server created

const PORT = 3001; // Set the port

app.use("/api/v1/auth", authRouter); // Middleware for auth
app.use("/api/v1/users", userRouter); // Middleware for users

// Api endpoint
app.get("/api/users", (req, res) => {
    res.send("This is from the server side"); // Sending plain text
});

// Start the server
app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDatabase();
});