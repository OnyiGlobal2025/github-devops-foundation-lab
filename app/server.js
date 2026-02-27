const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// -----------------------------
// Health Check (Liveness)
// -----------------------------
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// -----------------------------
// Readiness Check
// -----------------------------
app.get('/readyz', (req, res) => {
  const dependencyReady = true; // simulate DB or service readiness

  if (dependencyReady) {
    return res.status(200).json({ status: 'ready' });
  }

  res.status(503).json({ status: 'not ready' });
});

// -----------------------------
// Root Route
// -----------------------------
app.get('/', (req, res) => {
  res.json({ message: 'GitHub DevOps Foundation Lab API' });
});

// -----------------------------
// Start Server ONLY if run directly
// -----------------------------
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export app for testing
module.exports = app;