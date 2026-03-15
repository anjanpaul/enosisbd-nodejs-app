const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => res.send('OK'));

app.get('/', (req, res) => {
  res.json({ message: "Hello from Node.js app running on Kubernetes!" });
});

app.get('/info', (req, res) => {
  res.json({
    app: "nodejs-app",
    version: process.env.APP_VERSION || "1.0.0",
    environment: process.env.NODE_ENV || "development",
    hostname: require('os').hostname(),
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});