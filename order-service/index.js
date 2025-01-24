const express = require("express");
const app = express();
const port = 3002;

app.get("/order", (req, res) => {
    res.json({ message: "Hello from Order service banerjee !" });
});

app.listen(port, () => {
    console.log(`Order Service running on port ${port}`);
});
