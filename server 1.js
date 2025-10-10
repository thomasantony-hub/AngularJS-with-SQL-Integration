const express = require('express'); // Import the express module
const app = express(); // Create an instance of the Express application
const PORT = 3000; // Define the port the server will listen on

// =========================================================
// 1. Define a basic route (the root route '/')
// This is the homepage that sends a greeting when accessed.
// =========================================================
app.get('/', (req, res) => {
    // Send a response back to the client
    res.send('<h1>Hello from your Express Server!</h1><p>The server is running successfully.</p>');
});

// =========================================================
// 2. Start the server and listen on the defined port
// =========================================================
app.listen(PORT, () => {
    // A callback function to confirm the server has started
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server.');
});