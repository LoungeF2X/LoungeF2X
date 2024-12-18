import { createBareServer } from "@tomphttp/bare-server-node";
import express from "express";
import { createServer } from "node:http";
import { publicPath } from "ultraviolet-static";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { join } from "node:path";
import { hostname } from "node:os";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBddL00mb8gHPJH__nIdADfBhqPiFtOLCE",
  authDomain: "loungef2x.firebaseapp.com",
  projectId: "loungef2x",
  storageBucket: "loungef2x.firebasestorage.app",
  messagingSenderId: "38074061356",
  appId: "1:38074061356:web:5b8386cd6109504bdbf789",
  measurementId: "G-K0XFKT6PDT"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const bare = createBareServer("/bare/");
const app = express();

app.use(express.static(publicPath));
app.use("/l2x/", express.static(uvPath));
app.get("/g", (req, res) => {
  res.sendFile(join(publicPath, "g.html"))
})
app.get("/", (req, res) => {
  res.sendFile(join(publicPath, "index.html"))
})
app.get("/reading/", (req, res) => {
  res.sendFile(join(publicPath, "reading/index.html/"))
});
app.get("/proxy", (req, res) => {
  res.sendFile(join(publicPath, "proxy.html"));
});

app.use((req, res) => {
  res.status(404);
  res.sendFile(join(publicPath, "404.html"));
});
const server = createServer();

server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

let port = parseInt(process.env.PORT || "");

if (isNaN(port)) port = 3000;

server.on("listening", () => {
  const address = server.address();

  console.log("Listening on:");
  console.log(`\thttp://localhost:${address.port}`);
  console.log(`\thttp://${hostname()}:${address.port}`);
  console.log(
    `\thttp://${
      address.family === "IPv6" ? `[${address.address}]` : address.address
    }:${address.port}`
  );
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close();
  bare.close();
  process.exit(0);
}

server.listen({
  port,
});
