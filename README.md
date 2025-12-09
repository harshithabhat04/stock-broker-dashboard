# Stock Broker Client Web Dashboard 

A simple stock broker client web dashboard that demonstrates **real-time communication using WebSockets (Socket.IO)**.

The app allows a user to log in with an email, subscribe to supported stock tickers, and view their prices updating every second without refreshing the page. Prices are simulated using a random number generator.

## Key Features

- **Email login**
  - User enters email to start a session (no password required for this demo).

- **Subscribe to supported stocks**
  - Supported tickers: `GOOG`, `TSLA`, `AMZN`, `META`, `NVDA`.
  - User can select any combination using chip-style checkboxes.
  - Dashboard shows only the subscribed stocks.

- **Real-time price updates**
  - Server generates random stock prices and updates them **every second**.
  - Prices are pushed to all connected clients using **Socket.IO** (WebSockets).
  - UI updates instantly on the dashboard **without any page refresh**.
  - The current price is shown in **bold**, and the price cell briefly highlights when the value changes, so you can visually see the numbers changing in real time.
  - A separate **Change %** column shows the percentage movement since the last update, with green for positive change and red for negative.

- **Multi-user support**
  - Multiple users can open the app at the same time (different browser tabs/windows).
  - Each user logs in with their own email and subscribes to their own set of stocks.
  - Dashboards update asynchronously and independently for each user.

- **Clean UI/UX**
  - Centered dashboard card with gradient background.
  - Login screen and main dashboard in a single-page layout.
  - Email pill with “online” status indicator.
  - Modern cards and table layout with bold prices and subtle animations.

## Tech Stack

- **Frontend**
  - HTML5, CSS3
  - Vanilla JavaScript
  - Socket.IO client

- **Backend**
  - Node.js
  - Express
  - Socket.IO server

## Project Structure

```text
stock-dashboard/
├─ public/
│  └─ index.html        # Frontend (UI + client-side Socket.IO)
├─ server.js            # Express + Socket.IO backend
├─ package.json         # NPM dependencies and scripts
└─ .gitignore           # Ignore node_modules and other local files
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (LTS version recommended).

### Installation

```bash
# clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>

# install dependencies
npm install

# Run the app
npm start

# Then open your browser and go to:
http://localhost:3000
```
To test multi-user behaviour, open the same URL in two different tabs/windows, log in with different emails, and subscribe to different stocks.

