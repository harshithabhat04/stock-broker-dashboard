
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// Serve static files 
app.use(express.static("public"));

// Supported stocks
const SUPPORTED_STOCKS = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];

// Initial prices
const stockPrices = {};
SUPPORTED_STOCKS.forEach(ticker => {
  stockPrices[ticker] = 100 + Math.random() * 50; 
});

// Update prices every second using random change
setInterval(() => {
  SUPPORTED_STOCKS.forEach(ticker => {
    const change = (Math.random() - 0.5) * 2; 
    stockPrices[ticker] = Math.max(1, stockPrices[ticker] + change);
  });

  
  io.emit("priceUpdate", stockPrices);
}, 1000);

io.on("connection", socket => {
  console.log("User connected:", socket.id);

  // Store user data on socket
  socket.data.email = null;
  socket.data.subscriptions = [];

  socket.on("login", email => {
    socket.data.email = email;
    console.log(`User logged in: ${email}`);
    socket.emit("priceUpdate", stockPrices);
  });

  socket.on("subscribe", tickers => {
    socket.data.subscriptions = tickers;
    console.log(`User ${socket.data.email} subscribed to:`, tickers);
    
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
